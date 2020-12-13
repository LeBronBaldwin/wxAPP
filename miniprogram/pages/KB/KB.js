//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
      { "xqj": 1, "skjc": 1, "skcd": 2, "kcmc": "信息与通信工程导论@N403" },
      { "xqj": 1, "skjc": 6, "skcd": 2, "kcmc": "综合英语A@N307" },
      { "xqj": 2, "skjc": 3, "skcd": 3,"kcmc":"数学分析上@N104"},
      { "xqj": 2, "skjc": 9, "skcd": 3, "kcmc": "线性代数@N104" },
      { "xqj": 3, "skjc": 3, "skcd": 2, "kcmc": "综合英语A@S406" },
      { "xqj": 4, "skjc": 1, "skcd": 2, "kcmc": "信息与通信工程导论@N403" },
      { "xqj": 4, "skjc": 6, "skcd": 3, "kcmc": "数学分析@NN104" },
      { "xqj": 5, "skjc": 3, "skcd": 3, "kcmc": "C/C++程序设计与编程方法@N302" },
      { "xqj": 5, "skjc": 6, "skcd": 3, "kcmc": "C++实验课@S514"},
      { "xqj": 5, "skjc": 9, "skcd": 3, "kcmc": "思想道德修养与法律基础@办-二层多功能厅" },
      
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
