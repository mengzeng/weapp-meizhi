//获取应用实例  
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
    wx.request({
      method: 'GET',
      url: 'https://api.douban.com/v2/book/search?tag=综合&count=50',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data.books);
        that.setData({
          allbooks: res.data.books
        })
      }
    })
  },



  changeTab: function () {
    var url = "";
    switch (this.data.currentTab) {
      case 0:
        url = 'https://api.douban.com/v2/book/search?tag=综合&count=50';
        break;
      case 1:
        url = 'https://api.douban.com/v2/book/search?tag=文化&count=50'
        break
      case 2:
        url = 'https://api.douban.com/v2/book/search?tag=生活&count=50'
        break
    }
    wx.request({
      method: 'GET',
      url: url,
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data.books);
        switch (that.data.currentTab) {
          case 0:
            that.setData({
              allbooks: res.data.books
            })
            break;
          case 1:
            that.setData({
              wxbooks: res.data.books
            })
            break;
          case 2:
            that.setData({
              shbooks: res.data.books
            })
            break;
        }
      }
    })
  },
  /** 
   * 滑动切换tab 
   */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });
    // that.changeTab();
        var url = "";
        switch (this.data.currentTab) {
          case 0:
            url = 'https://api.douban.com/v2/book/search?tag=综合&count=50';
            break;
          case 1:
            url = 'https://api.douban.com/v2/book/search?tag=文化&count=50'
            break
          case 2:
            url = 'https://api.douban.com/v2/book/search?tag=生活&count=50'
            break
        }
        wx.request({
          method: 'GET',
          url: url,
          header: {
            'content-type': 'json'
          },
          success: function (res) {
            console.log(res.data.books);
            switch(that.data.currentTab){
              case 0:
                that.setData({
                  allbooks: res.data.books
                })
              break;
              case 1:
                that.setData({
                  wxbooks: res.data.books
                })
              break;
              case 2:
                that.setData({
                  shbooks: res.data.books
                })
              break;
            }

      }
    })
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
    // that.changeTab();

    var url = "";
    switch (this.data.currentTab) {
      case 0:
        url = 'https://api.douban.com/v2/book/search?tag=综合&count=50';
        break;
      case 1:
        url = 'https://api.douban.com/v2/book/search?tag=文化&count=50'
        break
      case 2:
        url = 'https://api.douban.com/v2/book/search?tag=生活&count=50'
        break
    }
    wx.request({
      method: 'GET',
      url: url,
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data.books);
        switch (that.data.currentTab) {
          case 0:
            that.setData({
              allbooks: res.data.books
            })
            break;
          case 1:
            that.setData({
              wxbooks: res.data.books
            })
            break;
          case 2:
            that.setData({
              shbooks: res.data.books
            })
            break;
        }

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