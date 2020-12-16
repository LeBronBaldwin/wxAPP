// pages/KXYK/KXYK.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
array:[],
tiaoshu:'10'
  },
shuaxin:function(){
  var that=this
  wx.request({
  url: 'https://api.tianapi.com/txapi/joke/index',
  method:'GET',
  data:{
    key:'0baf3813d541a3fdcb85a55baaa05b9f',
    num:that.data.tiaoshu
  },
  success:function(res){
    console.log(res.data)
that.setData({
  array:res.data.newslist
})
  }
})

},
input(e){
  console.log(e)
  var tiaoshu=e.detail.value
  this.setData({
    tiaoshu:tiaoshu
  })
      },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
    url: 'https://api.tianapi.com/txapi/joke/index',
    method:'GET',
    data:{
      key:'0baf3813d541a3fdcb85a55baaa05b9f',
      num:'10'
    },
    success:function(res){
      console.log(res.data)
  that.setData({
    array:res.data.newslist
  })
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