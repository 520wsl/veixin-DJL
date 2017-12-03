//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
var util = require('./utils/util')
App({
    onLaunch: function () {
        util.getCla2();
        util.getRegion();
        wx.setStorage({
            key: 'designerSelect',
            data: [
                {
                    key: -1,
                    title: '按行业',
                    type: 0,
                    listName: 'cla2'
                },
                {
                    key: -1,
                    title: '按性别',
                    type: 1,
                    listName: 'gender'
                },
                {
                    key: -1,
                    title: '按级别',
                    type: 2,
                    listName: 'rank'
                }
            ]
        })
        wx.setStorage({
            key: 'prolistSelect',
            data: [
                {
                    key: -1,
                    title: '按行业',
                    type: 0,
                    listName:'cla2'
                },
                {
                    key: -1,
                    title: '按区域',
                    type: 1,
                    listName:'region'
                },
                {
                    key: -1,
                    title: '按级别',
                    type: 2,
                    listName: 'rank'
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
        wx.setStorage({
            key: 'rank',
            data: [
                { value: 1, name: '助理', id: 'ASSISTANT' },
                { value: 2, name: '初级', id: 'PRIMARY' },
                { value: 3, name: '中级', id: 'MIDDLE' },
                { value: 4, name: '高级', id: 'HIGH' },
                { value: 5, name: '专家', id: 'EXPERT' }
            ]
        })
    },
    api: util.api,
    util: util,
    isLogin: false,
    moment: util.moment
})