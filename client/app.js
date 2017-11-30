//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
var util = require('./utils/util')
App({
    onLaunch: function () {
    },
    api:util.api,
    util:util,
    isLogin:false
})