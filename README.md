页面跳转：
.js
HL:function(){
  wx.navigateTo({
    url: '/pages/HL/HL'
  })
},
.wxml
<button bindtap="HL">
  黄历</button>
利用按钮绑定跳转函数wx.navigateTo，在url中编写要跳转页面的路径。
调用API:
.js
shuaxin:function(){
  var that=this
  wx.request({
  url: 'http://api.tianapi.com/txapi/joke/index',
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
.wxml
<button bindtap="shuaxin">点我刷新</button>
利用微信自带的wx.request函数，输入相应的url,method,data，在data中写入调用API时所需的数据，之后利用回调函数success和that.setData将获取的数据存到小程序的data中以便程序使用。可以利用console.log将获取的数据打印到控制台上，以便知晓数据结构。
注：微信小程序中，在wx.request({});方法调用成功或者失败之后，如果使用，this.data来获取，会出现获取不到的情况，调试页面也会报undefiend。原因是，在javascript中，this代表着当前对象，会随着程序的执行过程中的上下文改变，在wx.request({});方法的回调函数中，对象已经发生改变，所以已经不是wx.request({});方法对象了，data属性也不存在了。官方的解决办法是，复制一份当前的对象，如下：
var that=this;//把this对象复制到临时变量that
打开即刷新：
.js
onLoad: function (options) {
    var that=this
    wx.request({
    url: 'http://api.tianapi.com/txapi/joke/index',
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
将wx.request写在js文件的onLoad: function (options) {},中可以在页面打开时就获取一次信息
点击隐藏和显示内容：
.js
data: {
    tiaojian:false,
  },

W5:function(){
  var that=this
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

.wxml
<view class="futureWeather" bindtap="W5">点我查看未来五天天气</view>
<view wx:if="{{tiaojian}}"> 
<view wx:for="{{future}}" wx:for-index="date" wx:for-item="item" wx:key="date">
  <view> 
    {{future[date].date}}
  </view>
  <view> 
    气温：{{future[date].temperature}}
  </view>
  <view> 
    天气状况：{{future[date].weather}}
  </view>
  <view> 
    风：{{future[date].direct}}
  </view>
  <view>____________________________________________________________</view>
</view>
</view>
在view组件上绑定一个时间操控data里的值在true/false间变换，之后利用wx:if控制组件的显示与否。





选择了几个有代表性的样式来介绍和讲解
page {
  background: #f6f6f6;//白色背景
  display: flex;//弹性布局，让界面富有变化
  flex-direction: column;//容器排列方向按主轴从上至下排列
  justify-content: flex-start;//对齐主轴起点，项目间不留空隙
  background-size: 100% 50%;//背景尺寸
  margin: 0px;//边距
}
页面的风格尽量简洁，抛却繁文缛节，使其看起来简洁明了。

.hlys{
  border: rgba(0, 0, 0, 0.3);//边框颜色
  background-color:rgb(255, 187, 0);//背景颜色
  border-radius: 0.8em;//给button添加圆角边框
  padding: 0.7em;//蒙版
  box-shadow:0 0 0.6em#655;//给button加阴影
  text-align: left;//字体左对齐
  margin-left: 0em;//页边距
  font-size: 1.5em;//字体大小
  font-family: cursive;//字体
  float: right;//浮动
}
黄历button的样式选用了rgb的方式给颜色，能更好的控制颜色精准度，给button加了背景图片和阴影。
.image{
  height: 150rpx;//高度
width: 750rpx;//宽度
}
主页上方插入了北邮的校徽和名字，更好的突出了主题，让北邮人一进来就感觉到家的温暖，调整宽高使其适应主页。
