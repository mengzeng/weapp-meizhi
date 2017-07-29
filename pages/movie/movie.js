//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    var templist = new Array ;
    wx.request({
      method:'GET',
      url: 'https://api.douban.com/v2/movie/in_theaters',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        // console.log("33333", res.data.subjects[0].casts[0].name);
        for (var i = 0; i < res.data.subjects.length;i++){
          var movieData = new Object; 
          var actorName = "";
          for (var j = 0; j < res.data.subjects[i].casts.length;j++){
            if (j != res.data.subjects[i].casts.length - 1){
              actorName = actorName + res.data.subjects[i].casts[j].name + "/";
            }else{
              actorName = actorName + res.data.subjects[i].casts[j].name; 
            }
         
          }
          movieData.name = actorName;
          movieData.type1 = res.data.subjects[i].genres[0];
          templist.push(movieData);
        }
        that.setData ({
          movielist:templist
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