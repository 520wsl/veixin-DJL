// pages/designer/designer.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pageType: 'designerSelect',
        tiemTxt:0
    },
    search: function (e) {
        this.setData({
            pageType: e.detail.input
        })
        console.log(e.detail.input)
    },
    setTime:function(){
        let tiemTxt = getApp().moment().format('X');
        this.setData({
            tiemTxt: tiemTxt
        })
        // console.error(getApp().moment().format('X'))
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
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

        this.setTime()
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