var util=require('../../util/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  time:"",
  result:[],
  yi:"",
  ji:"",
  baiji:"",
  chongsha:"",
  jishen:"",
  xiongshen:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var TIME = util.getToday();
    this.setData({
    time: TIME,
    });
    var that=this
  wx.request({
  url: 'http://api.tianapi.com/txapi/lunar/index',
  method:'GET',
  data:{
    key:'0baf3813d541a3fdcb85a55baaa05b9f',
    date:this.data.time
  },
  success:function(res){
    console.log(res.data)
    that.setData({
      result:res.data.newslist
    })
  }
})
wx.request({
  url: 'http://v.juhe.cn/laohuangli/d',
  method:'GET',
  data:{
    key:'aa4b8d6c840e2a9150bbfbacea1c78de',
    date:this.data.time
  },
  success:function(res){
    console.log(res)
    that.setData({
      yi:res.data.result.yi,
      ji:res.data.result.ji,
      baiji:res.data.result.baiji,
      chongsha:res.data.result.chongsha,
      jishen:res.data.result.jishen,
      xiongshen:res.data.result.xiongshen,
    })
  }
})
  },
  chaxun:function(){
    var that=this
    wx.request({
    url: 'http://api.tianapi.com/txapi/lunar/index',
    method:'GET',
    data:{
      key:'0baf3813d541a3fdcb85a55baaa05b9f',
      date:this.data.time
    },
    success:function(res){
      console.log(res.data)
      that.setData({
        result:res.data.newslist
      })
    }
  })
  wx.request({
    url: 'http://v.juhe.cn/laohuangli/d',
    method:'GET',
    data:{
      key:'aa4b8d6c840e2a9150bbfbacea1c78de',
      date:this.data.time
    },
    success:function(res){
      console.log(res)
      that.setData({
        yi:res.data.result.yi,
        ji:res.data.result.ji,
        baiji:res.data.result.baiji,
        chongsha:res.data.result.chongsha,
        jishen:res.data.result.jishen,
        xiongshen:res.data.result.xiongshen,
      })
    }
  })
  },
  input(e){
    console.log(e)
    var time=e.detail.value
    this.setData({
      time:time
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