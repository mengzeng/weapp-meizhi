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
    var that = this;
    console.log('https://api.douban.com/v2/movie/subject/' + options.id);
    wx.request({
      method:'GET',
      header:{
        'content-type': 'json'
      },
      url: 'https://api.douban.com/v2/movie/subject/'+options.id,
      success:function(res){
        console.log("ssss",res.data);
        var otherName ="";
        for(var i= 0;i<res.data.aka.length;i++){
          if(i==res.data.aka.length){
            otherName = otherName + res.data.aka[i];
          }else{
            otherName = otherName + res.data.aka[i]+"/";
          }
       
        }
        res.data.aka =otherName;
        that.setData({
          movieDetail:res.data
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