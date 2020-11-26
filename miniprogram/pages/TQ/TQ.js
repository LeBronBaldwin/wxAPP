// pages/TQ/TQ.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tiaojian:false,
city:'北京',
city1:"",
temperature:"",
humidity:"",
info:"",
wid:"",
direct:"",
power:"",
aqi:"",
future:[],
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
temperature:res.data.result.realtime.temperature,
humidity:res.data.result.realtime.humidity,
info:res.data.result.realtime.info,
wid:res.data.result.realtime.wid,
direct:res.data.result.realtime.direct,
power:res.data.result.realtime.power,
aqi:res.data.result.realtime.aqi,
city1:res.data.result.city,
future:res.data.result.future
    })
  }
})
},
shuru(e){
  var city=e.detail.value
  this.setData({
    city:city
  })
      },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  temperature:res.data.result.realtime.temperature,
  humidity:res.data.result.realtime.humidity,
  info:res.data.result.realtime.info,
  wid:res.data.result.realtime.wid,
  direct:res.data.result.realtime.direct,
  power:res.data.result.realtime.power,
  aqi:res.data.result.realtime.aqi,
  city1:res.data.result.city,
  future:res.data.result.future
      })
    }
  })
  },
W5:function(){
  var that=this
if(this.data.tiaojian==false){
  that.setData({
    tiaojian:true
  })
}else{
  that.setData({
    tiaojian:false
  })
}
console.log(this.data.tiaojian)
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