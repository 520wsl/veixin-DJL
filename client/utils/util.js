var config = require('../config')
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}


// 显示繁忙提示
var showBusy = text => wx.showToast({
    title: text,
    icon: 'loading',
    duration: 10000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
    title: text,
    icon: 'success'
})

// 显示失败提示
var showModel = (title, content) => {
    wx.hideToast();

    wx.showModal({
        title,
        content: JSON.stringify(content),
        showCancel: false
    })
}

/**
 * 组装接口完整的路径名称
 * @param {接口名称 /app/index/recommend} urlName 
 */
var apiName = function (urlName = '') {
    return config.service.apiUrl + urlName || '';
}

/**
 * 接口调用
 * 两个参数时
 * @param {接口路径} url
 * @param {成功的回调方法} success callBack
 * 
  * 三个参数时
 * @param {接口路径} url
 * @param {接口的参数} data
 * @param {成功的回调方法} successcallBack
 */
var api = {
    get: function () {
        var url = arguments[0];
        if (arguments.length === 2) {
            var data = {};
            var func = arguments[1];
        } else if (arguments.length === 3) {
            var data = arguments[1];
            var func = arguments[2];
        } else {
            console.error("api.get 参数异常 ===>", arguments)
            return;
        }
        wx.request({
            url: apiName(arguments[0]),
            method: 'GET',
            data: data,
            dataType: "json",
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (e) {
                func(e.data)
            }
        })
    },
    post: function () {
        var url = arguments[0];
        if (arguments.length === 2) {
            var data = {};
            var func = arguments[1];
        } else if (arguments.length === 3) {
            var data = arguments[1];
            var func = arguments[2];
        } else {
            console.error("api.get 参数异常 ===>", arguments)
            return;
        }
        wx.request({
            url: apiName(arguments[0]),
            method: 'POST',
            dataType: "json",
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: data,
            success: function (e) {
                func(e.data)
            }
        })
    },
}

module.exports = { formatTime, showBusy, showSuccess, showModel, api }
