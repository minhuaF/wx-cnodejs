const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    tabTitles: [
      '全部',
      '精华',
      '问答',
      '求职',
      '分享',
    ],
    clientHeight: ''
  },
  /**
   * 事件处理函数
   */
  loadList() {
    let topicIntro = []
    app.cnodeApi.getTopics({ page: 2, tab: '', limit: 15, mdrender: 'false' }).then((result) => {
      result.map((item, index) => {
        let { create_at, ...rest } = item
        let date = new Date(create_at)
        let newDate = `${date.getFullYear()}年${date.getMonth()}月${date.getDay()}日`
        topicIntro.push({ create_at: newDate, ...rest})
      })
      this.setData({
        list: topicIntro
      })
    })
  },

  gotoDetails(e){
    console.log('==', e)
    let id = e.currentTarget.dataset.itemId
    wx.navigateTo({
      url: `/pages/details/details?id=${id}`,
    })
  },

  getHeight(){
    let that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          clientHeight: res.windowHeight
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadList()
    this.getHeight()
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