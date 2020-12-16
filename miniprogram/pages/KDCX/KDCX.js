// pages/KDCX/KDCX.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
danhao:'',
newslist:[],
  },
  input(e){
    console.log(e)
    var time=e.detail.value
    this.setData({
      danhao:time
    })
        },
        chaxun:function(){
          var that=this
          wx.request({
          url: 'https://v1.alapi.cn/api/kd',
          method:'GET',
          data:{
            number:this.data.danhao,
          },
          success:function(res){
            console.log(res)
            that.setData({
              newslist:res.data.data.info.reverse(),
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