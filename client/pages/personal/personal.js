// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false
  },
  setoutLogin(){
   getApp().util.outLogin()
  },
  setLoginStatus:function() {
    let loginStatus = getApp().isLogin;
    if(!loginStatus){
     wx.showModal({
        title:'个人中心',
        content:'未登录，请您先登录！',
        confirmText:'登录',
        success:function (e) {
          if(e.cancel){
            wx.switchTab({
                url: '/pages/home/home'
              })
        }
        if(e.confirm){
            wx.redirectTo({
                url: '/pages/login/login'
              })
        }
            return ;
          }
        
     })
      return ;
    }
    this.setData({
      isLogin:loginStatus
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setLoginStatus()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setLoginStatus()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setLoginStatus()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})