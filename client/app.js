//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
var util = require('./utils/util')
App({
    onLaunch: function () {
        util.getCla2();
        wx.setStorage({
            key: 'designerSelect',
            data: [
                {
                    key: 0,
                    title: '按行业',
                    type: 0
                },
                {
                    key: 0,
                    title: '按性别',
                    type: 1
                },
                {
                    key: 0,
                    title: '按级别',
                    type: 2
                }
            ]
        })
        wx.setStorage({
            key: 'prolistSelect',
            data: [
                {
                    key: 0,
                    title: '按行业',
                    type: 0
                },
                {
                    key: 0,
                    title: '按区域',
                    type: 1
                },
                {
                    key: 0,
                    title: '按级别',
                    type: 2
                }
            ]
        })
        wx.setStorage({
            key: 'gender',
            data: [
                {
                    id: 0,
                    name: '帅哥'
                },
                {
                    id: 1,
                    name: '美女'
                }
            ]
        })
    },
    api: util.api,
    util: util,
    isLogin: false,
    moment: util.moment
})