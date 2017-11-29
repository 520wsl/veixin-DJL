// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: {
      username: '',
      pwd: ''
    },
    username: '',
    pwd: ''
  },
  // 登录
  formSubmit: function (e) {
    let that = this;
    let data = e.detail.value;

    if (!data.username || !/^1[34578]\d{9}$/.test(data.username)) {
      this.setData({ "msg.username": "请输入11位数字的手机号" });
      return;
    } else {
      this.setData({ "msg.username": "" });
    }

    if (!data.pwd || data.pwd.length < 6 || data.pwd.length > 11) {
      this.setData({ "msg.pwd": "请输入6-11位数字、字母组合的密码" });
      return;
    } else {
      this.setData({ "msg.pwd": "" });
    }
    const r = new Date().getTime();

    getApp()["api"].post(
      '/auth/login',
      {
        username: data.username,
        password: data.pwd,
        type: 1,
        r: r
      },
      function (e) {
        if (e.status != 200) {
          getApp().util.showModel("登录", e.msg)
          return;
        }
        getApp().util.getUserInfo();
        wx.showModal({
          title:'登录',
          content:'是否进入个人中心',
          cancelText:'首页',
          confirmText:'个人中心',
          success:function (e) {
              if(e.confirm){
                  wx.switchTab({
                      url: '/pages/personal/personal'
                    })
              }
              if(e.cancel){
                  wx.switchTab({
                      url: '/pages/home/home'
                    })
              }
          }
      })
        that.setData({
          username: '',
          pwd: ''
        })
      }
    )
    console.log('form发生了submit事件，携带数据为：', e.detail)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // wx.login({
    //   success: function(e) {

    //     if(e.code){
    //       console.log(e)
    //     }else{
    //       console.error("获取用户信息失败！"+e.errMsg)
    //     }
    //   }
    // })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.checkSession({
      success: function () {
        //session 未过期，并且在本生命周期一直有效
        console.log("session 未过期，并且在本生命周期一直有效")
      },
      fail: function () {
        //登录态过期
        // wx.login() //重新登录
        console.log("登录态过期")
      }
    })
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