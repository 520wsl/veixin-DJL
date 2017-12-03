var config = require('../config')
var moment = require('./moment.min')
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

// Storage 用户信息 key
const userInfoKey = "userInfo"


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
    cookie: '',
    setCookie: (respone) => {
        if (respone.header['Set-Cookie']) {
            api.cookie = respone.header['Set-Cookie'];
        }
    },
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
                'content-type': 'application/x-www-form-urlencoded',
                'Cookie': api.cookie || ''
            },
            success: function (e) {
                api.setCookie(e);
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
                'content-type': 'application/x-www-form-urlencoded',
                'Cookie': api.cookie || ''
            },
            data: data,
            success: function (e) {
                api.setCookie(e);
                func(e.data)
            }
        })
    },
}

// 获取登录信息
var getUserInfo = function () {
    api.get(
        "/user/info",
        function (e) {
            console.log(e)
            if (e.status != 200) {
                showModel('用户信息', e.msg)
                return;
            }
            getApp().isLogin = true
            wx.setStorage({
                key: userInfoKey,
                data: e.data
            })
        }
    )
}

// 获取登录状态
var getLoginState = function () {
    let that = this;
    api.get(
        '/auth/login/status',
        { timestamp: Date.now() },
        function (e) {
            if (e.status != 200) {
                removeUserInfo()
                return;
            }

            getUserInfo();

        }
    )
}

// 退出登录
var outLogin = function () {
    api.post(
        '/auth/logout',
        function (e) {
            if (e.status != 200) {
                showModel('退出登录', e.msg)
                return;
            }
            removeUserInfo()
            wx.showModal({
                title: '退出登录',
                content: '退出登录成功，是否进入首页？',
                cancelText: '重新登录',
                confirmText: '首页',
                success: function (e) {
                    if (e.confirm) {
                        wx.switchTab({
                            url: '/pages/home/home'
                        })
                    }
                    if (e.cancel) {
                        wx.navigateTo({
                            url: '/pages/login/login'
                        })
                    }
                }
            })
        }
    )
}

// 清除 用户信息 Storage
var removeUserInfo = function () {
    getApp().isLogin = false
    wx.removeStorage({
        key: userInfoKey
    })
}

// 获取行业类目
var getCla2 = function () {
    api.get(
        '/class/child',
        { pid: 4 },
        function (e) {
            if (e.status != 200) {
                console.error('行业类目获取：', e.msg)
                return;
            }
            wx.setStorage({
                key: "cla2",
                data: e.data
            })
        }
    )
}

// 作品区域获取
var getRegion = function () {
    api.get(
        '/type/list',
        function (e) {
            if (e.status != 200) {
                console.error('作品区域获取：', e.msg)
                return;
            }
            wx.setStorage({
                key: "region",
                data: e.data
            })
        }
    )
}

module.exports = { formatTime, showBusy, showSuccess, showModel, api, getUserInfo, getLoginState, outLogin, getCla2, getRegion, moment }
