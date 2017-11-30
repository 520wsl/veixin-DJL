// components/nav-category/nav-category.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pageType:{
      type:String,
      valeu:'designerSelect',
      observer:function (newVal,odlVal) {
        this.setPageType(newVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    /**类目类型 */
    categoryList: [
      {
        type: 0,
        title: '按行业',
        key: 0,
      },
      {
        type: 1,
        title: '按区域',
        key: 0,
      },
      {
        type: 2,
        title: '按级别',
        key: 0,
      },
    ],
    pageType:'',
  },
  attached(){
    console.error('aa')
  },
  /**
   * 组件的方法列表
   */
  methods: {
    clickClass(e){
      console.log(e)
    },
    setPageType(e){
      console.log('sss')
      if(e == undefined){
        return ;
      }
      this.setData({
        pageType:e
      })
    }

  }
})
