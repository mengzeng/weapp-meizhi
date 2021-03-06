//获取应用实例
var app = getApp()
var url = "https://api.douban.com/v2/movie/top250";
var count = 20;
var start = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      hidden: false
    });
    wx.request({
      method: 'GET',
      header: {
        'content-type': 'json'
      },
      url: url,
      data: {
        start: start,
        count: count
      },
      success: function (res) {
        console.log("ssss", res.data);
        that.setData({
          movielist: res.data.subjects,
          hidden:true
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
    var that = this;
    that.setData({
      hidden: false
    });
    wx.request({
      method: 'GET',
      header: {
        'content-type': 'json'
      },
      url: url,
      data: {
        start: start,
        count: count
      },
      success: function (res) {
        var list = that.data.movielist;
        for (var i = 0; i < res.data.subjects.length; i++) {
          list.push(res.data.subjects[i])
        }
        that.setData({
          movielist: list,
          hidden: true
        });
        start++;
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})