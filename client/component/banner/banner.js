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
    console.log(getApp()["api"])
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 获取banner数据
    getBanner: function () {
      var that = this
      getApp()["api"].get(
          '/common/config/get',
          { key: "bannerkey"},
          function(e){
              if (e.status != 200) {
                  that.setData({
                      isShowBanner: false,
                      imgUrls: []
                  })
                  return;
              }
              that.setData({
                  isShowBanner: true,
                  imgUrls: JSON.parse(e.data),
              })
          }
      )
    },
  }
})
