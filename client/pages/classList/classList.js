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
        listName: '',
        menu: {
            'designerSelect': ['按行业', '按性别', '按级别'],
            'prolistSelect': ['按行业', '按区域', '按级别']
        }
    },
    setNum(e) {
        console.log('选中参数', e.currentTarget.dataset.key)
        console.log('选中参数', e.currentTarget.dataset.title)
        let that = this;
        let key = e.currentTarget.dataset.key || 0;
        let title = e.currentTarget.dataset.title || '全部';
        let status = [];
        let pageType = this.data.pageType || '';
        let dataType = this.data.type || 0;
        wx.getStorage({
            key: pageType,
            success: function (e) {
                console.log(e.data)
                if (e.data == undefined) {
                    return;
                }
                status = e.data;
                console.log(status)
                status[dataType].key = key;
                status[dataType].title = title;

                wx.setStorage({
                    key: pageType,
                    data: status,
                    success: function () {
                        wx.navigateBack({
                            delta: 1
                        })
                    }
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
                pageType: options.pageType,
                listName: options.listName
            })
        }
        this.getClassList();
    },
    getClassList() {
        let that = this;
        wx.getStorage({
            key: that.data.listName,
            success: function (e) {
                console.log('缓存中取出的' + that.data.listName, e.data)
                that.setData({
                    classList: e.data
                })
            },
            fail: function (e) {
                console.error('缓存中取出的' + that.data.listName, e)
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