var util = require('../../utils/util')
// component/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShowBanner: false,
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    vertical: true,
    interval: 5000,
    duration: 100,
  },
options:{
  multipleSlots:true
},

  /**
   * 生命周期函数--监听页面加载
   */
  ready: function (options) {
    this.getBanner()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 获取banner数据
    getBanner: function () {
      var that = this
      wx.request({
        url: util.api('/common/config/get'),
        method: 'GET',
        data: {
          key: "bannerkey"
        },
        success: function (e) {

          if (e.data.status != 200) {
            that.setData({
              isShowBanner: false,
              imgUrls: []
            })
            return;
          }
          that.setData({
            isShowBanner: true,
            imgUrls: JSON.parse(e.data.data),
          })
        }
      })

    },
  }
})
