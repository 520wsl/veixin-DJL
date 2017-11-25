var util = require('../../utils/util')
Page({

    /**
     * 页面的初始数据
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
        isShowRecommendDesigner: false,
        recommendDesigners: [],


    },
    getRecommendDesigner: function () {
        var that = this
        wx.request({
            url: util.api('/app/index/recommend'),
            method: 'GET',
            data: {},
            success: function (e) {
                if (e.data.status != 200) {
                    that.setData({
                        isShowRecommendDesigner: false,
                        recommendDesigners: [],
                    })
                    return;
                }
                that.setData({
                    isShowRecommendDesigner: true,
                    recommendDesigners: e.data.data,
                })

            }
        })
    },
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

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getBanner()
        this.getRecommendDesigner();
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