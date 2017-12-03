// pages/designer/designer.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pageType: 'designerSelect',
        tiemTxt: 0,
        params: {
            classId: '',// 行业
            rank: '',// 级别
            gender: '',//性别
            name: '',// 设计师关键词
            pageNum: 1,
            pageSize: 20,
            count:0
        },
        dataList:[]
    },
    search: function (e) {
        console.log(e.detail.input)
        this.setData({
            'params.name': e.detail.input || ''// 设计师关键词
        })
        this.setParams();
    },
    setParams: function () {
        let that = this;
        wx.getStorage({
            key: that.data.pageType,
            success: function (e) {
                console.log(e.data)
                if (e.data == undefined) {
                    return;
                }
                let classId = e.data[0]['key'] == -1 ? '' : e.data[0]['key'];// 行业
                let gender = e.data[1]['key'] == -1 ? '' : e.data[1]['key'];// 性别
                let rank = e.data[2]['key'] == -1 ? '' : e.data[2]['key'];// 级别

                that.setData({
                    'params.classId': classId,
                    'params.rank': rank,
                    'params.gender': gender
                })
                console.log('设计师列表，选中数据', that.data.params)
                that.getList();
            }
        })
    },
    setTime: function () {
        let tiemTxt = getApp().moment().format('X');
        this.setData({
            tiemTxt: tiemTxt
        })
    },
    getList(){
        let that=this;
        getApp().api.get(
            '/app/designer/list',
            that.data.params,
            function(e){
                console.log('设计师列表数据getlist',e)
                if(e.status != 200){
                    getApp().util.showModel('设计师列表',e.msg)
                    return ;
                }
                that.setData({
                    dataList:e.data.list,
                    'params.count': e.data.count
                })
            }
        )
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
        this.setParams()
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