// components/nav-category/nav-category.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        pageType: {
            type: String,
            value: 'designerSelect',
            observer: function (newVal, odlVal) {
                console.log(newVal)
                if (newVal) {
                    this.init();
                }
            },
        },
        tiemTxt: {
            type: Number,
            value: 0,
            observer: function (newVal, odlVal) {
                console.error(newVal)
                this.setCategoryList();
            }
        }

    },

    /**
     * 组件的初始数据
     */
    data: {
        /**类目类型 */
        categoryList: [],
    },
    attached() {
        console.error('aa')
    },
    created() { console.log(1) },
    ready() { console.log(2) },
    moved() { console.log(3) },
    detached() { console.log(4) },
    /**
     * 组件的方法列表
     */
    methods: {
        init() { console.log('init') },
        clickClass(e) {
            console.log(e)
        },
        setCategoryList() {
            console.log('sdssd')
            let that = this;
            wx.getStorage({
                key: that.data.pageType,
                success: function (e) {
                    that.setData({
                        categoryList:e.data
                    });
                    console.error('setCategoryListage', e.data)
                },
            })
        }
    }
})
