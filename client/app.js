//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
var util = require('./utils/util')
App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
        console.log('onLaunch : 小程序启动之后 触发');
    },
    api:util.api,
    util:util,
    isLogin:false
})