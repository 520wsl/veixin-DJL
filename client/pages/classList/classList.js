// pages/classList/classList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        classList: [],
        type: '',
        pageType: '',
        title: '',
        menu:{
            'designerSelect': ['按行业', '按性别', '按级别'],
            'prolistSelect': ['按行业', '按区域', '按级别']
        }
    },
    getNum(e) {
        console.log('选中参数', e.currentTarget.dataset.key)
        console.log('选中参数', e.currentTarget.dataset.title)
        let that = this;
        let key = e.currentTarget.dataset.key || 0;
        let title = e.currentTarget.dataset.title || '全部';
        let status = [];
        wx.getStorage({
            key: that.data.pageType,
            success: function (e) {
                console.log(e.data)
                if (e.data == undefined) {
                    return;
                }
                status = e.data;
                console.log(status)
                status[that.data.type].key = key;
                status[that.data.type].title = title;

                wx.setStorage({
                    key: that.data.pageType,
                    data: status
                })
            }
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        console.log('onload', options)
        console.log(that.data.menu[options.pageType][options.type])
        if (options.type != undefined && options.pageType != undefined) {
            this.setData({
                type: options.type,
                title: that.data.menu[options.pageType][options.type],
                pageType: options.pageType
            })
        }
        // this.getCla2()
        this.getGender();
       

    },
    getCla2(){
        let that = this;
        wx.getStorage({
            key: 'cla2',
            success: function (e) {
                console.log('缓存中取出的cla2', e.data)
                that.setData({
                    classList: e.data
                })
            },
            fail: function (e) {
                console.error('缓存中取出的cla2', e)
            }
        })
    },

    getGender() {
        let that = this;
        wx.getStorage({
            key: 'gender',
            success: function (e) {
                console.log('缓存中取出的cla2', e.data)
                that.setData({
                    classList: e.data
                })
            },
            fail: function (e) {
                console.error('缓存中取出的cla2', e)
            }
        })
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