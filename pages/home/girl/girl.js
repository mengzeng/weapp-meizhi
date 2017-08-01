var url ='https://gank.io/api/search/query/listview/category/%E7%A6%8F%E5%88%A9/count/20/page/';
var page = 1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,  
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
      url: url + page,
      success: function (res) {
        console.log(res.data.results);
        that.setData({
          girls_list:res.data.results,
           hidden: true
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
      hidden: true
    });  
    wx.request({
      url: url + page,
      success: function (res) {
        var list = that.data.girls_list;
        for(var i= 0;i<res.data.results.length;i++){
          list.push(res.data.results[i])
        }
        that.setData({
          girls_list:list,
          hidden: true  
        });
        page++;
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})