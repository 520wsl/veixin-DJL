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
                title: '全部',
                type:0
              },
              {
                key: 0,
                title: '全部',
                type:1
              },
              {
                key: 0,
                title: '全部',
                type:2
              }
            ]
          })
    },
    api:util.api,
    util:util,
    isLogin:false,
})