const app = getApp()
import WxParse from '../../wxParse/wxParse.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentInfo: {
      loginname: '',
      title: '',
      content: '',
      create_at: ''
    },
    comment: {},
  },

  /**
   * 获取主题详情
   * @param {String} id -主题id
   */
  getDetails(id) {
    let that = this
    app.cnodeApi.getTopicDetail({ params: [id] }).then((res) => {
      let { content, title, visit_count, author, create_at, tab, replies} = res
      let date = new Date(create_at)
      let newDate = `${date.getFullYear()}年${date.getMonth()}月${date.getDay()}日`
      WxParse.wxParse('content', 'html', content, that, 5)

      this.setData({
        contentInfo: { create_at: newDate, title, visit_count, author, tab },
        comment: replies
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options.query', options)
    this.getDetails(options.id)
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