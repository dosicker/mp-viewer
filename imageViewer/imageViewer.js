// components/imageViewer/imageViewer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    onShow: {
      type: Boolean,
      value: false
    },
    onClass: {
      type: Boolean,
      value: true
    },
    imgUrl: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  // 在组件实例进入页面节点树时执行
  attached() {},

  /**
   * 组件的方法列表
   */
  methods: {
    hideViewer(e) {
      this.triggerEvent('hideViewer');
    }
  }
})