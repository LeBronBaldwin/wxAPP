// pages/XZYS/XZYS.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    list:[
      {listName:'点我查看日期对应星座表',
      item:[{
      itemName:'子列表1-1',
      content:"白羊座的日期为3月21日至4月19日",
      content1:"金牛座的日期为4月20日至5月20日",
      content2:"双子座的日期为5月21日至6月21日",
      content3:"巨蟹座的日期为6月22日至7月22日",
      content4:"狮子座的日期为7月23日至8月22日",
      content5:"处女座的日期为8月23日至9月22日",
      content6:"天秤座的日期为9月23日至10月23日",
      content7:"天蝎座的日期为10月24日至11月22日",
      content8:"射手座的日期为11月23日至12月21日",
      content9:"摩羯座的日期为12月22日至1月19日",
      content10:"水瓶座的日期为1月20日至2月18日",
      content11:"双鱼座的日期为2月19日至3月20日",
      time: '2015-05-06'
      }, ]
      },
      ],
      all:"",
      color:"",
      health:"",
      love:"",
      money:"",
      number:"",
      QFriend:"",
      summary:"",
      work:"",
      a:false
  },
  listTap(e){
    console.log('触发了最外层');
    let Index = e.currentTarget.dataset.parentindex,//获取点击的下标值
    list=this.data.list;
    list[Index].show = !list[Index].show || false;//变换其打开、关闭的状态
    if (list[Index].show){//如果点击后是展开状态，则让其他已经展开的列表变为收起状态
    this.packUp(list,Index);
    }
    this.setData({
    list    });
    },
    //点击里面的子列表展开收起
    listItemTap(e){
    let parentindex = e.currentTarget.dataset.parentindex,//点击的内层所在的最外层列表下标
    Index=e.currentTarget.dataset.index,//点击的内层下标
    list=this.data.list;
    console.log(list[parentindex].item,Index);
    list[parentindex].item[Index].show = !list[parentindex].item[Index].show||false;//变换其打开、关闭的状态
    if (list[parentindex].item[Index].show){//如果是操作的打开状态，那么就让同级的其他列表变为关闭状态，保持始终只有一个打开
    for (let i = 0, len = list[parentindex].item.length;i<len;i++ ){
    if(i!=Index){
    list[parentindex].item[i].show=false;
    }
    }
    }
    this.setData({list});
    },
    //让所有的展开项，都变为收起
    packUp(data,index){
    for (let i = 0, len = data.length; i < len; i++) {//其他最外层列表变为关闭状态
    if(index!=i){
    data[i].show = false;
    for (let j=0;j<data[i].item.length;j++){//其他所有内层也为关闭状态
    data[i].item[j].show=false;
    }
    }
    }
    },
    input(e){
console.log(e)
var value1=e.detail.value
this.setData({
  value:value1
})
    },
    chaxun(){
      var that=this
      wx.request({
      url: 'http://web.juhe.cn:8080/constellation/getAll',
      method:'GET',
      data:{
        key:'e0563a84db25a95d9cb896348899dc65',
        consName:this.data.value,
        type:'today'
      },
      success:function(res){
        console.log(res.data)
        that.setData({
      all:res.data.all,
      color:res.data.color,
      health:res.data.health,
      love:res.data.love,
      money:res.data.money,
      number:res.data.number,
      QFriend:res.data. QFriend,
      summary:res.data.summary,
      work:res.data.work,
        })
      }
    })
    this.setData({
      a:'ture'
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