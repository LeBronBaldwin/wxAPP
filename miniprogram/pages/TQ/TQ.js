// pages/TQ/TQ.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
city:'北京',
temperature:"",
humidity:"",
info:"",
wid:"",
direct:"",
power:"",
aqi:""
  },
huoqu:function(){
  var that=this
  wx.request({
  url: 'http://apis.juhe.cn/simpleWeather/query',
  method:'GET',
  data:{
    key:'8d0d8bad47b6053b0e9d1a53adf4e0c0',
    city:this.data.city,
  },
  success:function(res){
    console.log(res.data)
    that.setData({
      
    })
  }
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