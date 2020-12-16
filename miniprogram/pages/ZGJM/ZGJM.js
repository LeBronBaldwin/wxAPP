// pages/ZGJM/ZGJM.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  meng:'',
  newslist:[],
  },
  chaxun:function(){
    var that=this
    wx.request({
    url: 'https://v.juhe.cn/dream/query?key=21d2c40ecc468b9912572682fd9ce315&q=%E9%BB%84%E9%87%91',
    method:'GET',
    data:{
      key:'21d2c40ecc468b9912572682fd9ce315',
      q:this.data.meng,
      full:'1'
    },
    success:function(res){
      console.log(res.data)
      that.setData({
        newslist:res.data.result
      })
    }
  })
  },
  input(e){
    console.log(e)
    var time=e.detail.value
    this.setData({
      meng:time
    })
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