var Bmob = require('../../utils/Bmob-2.2.1.min.js');
Bmob.initialize("417c83f6e9a9c139", "352609","738f7c87bd03db7c22572bfc5ee826da");

const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    come: false,
    user_id: 0,
    objectId: "0",
    why:'',
    tec:'',
    a:'',
    price:'',
    picker: ['是', '否'],
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
    console.log(objectId)
  },
  bindtapFunc(e) {
    this.setData({
      objectId: e.currentTarget.dataset.text
    })
<<<<<<< HEAD
    console.log(typeof(this.data.objectId))
    var a = this.data.objectId
    const query = Bmob.Query("_User");
    query.get(a).then(res => {
      console.log(res)
      res.set('come', false)
      res.save()
    }).catch(err => {
      console.log(err)
    })
=======
    console.log(this.data.objectId)
>>>>>>> 优化管理员界面处理预约信息
  },
  formWhy: function (e) {
    this.setData({
      why: e.detail.value
    })
  }, 
  formTec: function (e) {
    this.setData({
      tec: e.detail.value
    })
  },
  formPrice: function (e) {
    this.setData({
      price: e.detail.value
    })
    console.log(typeof(this.data.price))
  },
  foutijiao(e){
<<<<<<< HEAD
    this.setData({
      objectId: e.currentTarget.dataset.text
    })
    console.log(typeof (this.data.objectId))
    var a = this.data.objectId
    const query = Bmob.Query("_User");
    query.get(a).then(res => {
      console.log(res)
      res.set('why', this.data.why)
      res.save()
    }).catch(err => {
      console.log(err)
    })
  },
  shitijiao(e) {
    this.setData({
      objectId: e.currentTarget.dataset.text
    })
    console.log(typeof (this.data.objectId))
    var a = this.data.objectId
    const query = Bmob.Query("_User");
    query.get(a).then(res => {
=======
    const query = Bmob.Query("_User");
    query.get(this.data.objectId).then(res => {
      console.log(res)
      res.set('come', false)
      res.save()
    }).catch(err => {
      console.log(err)
    })
    query.get(this.data.objectId).then(res => {
      console.log(res)
      res.set('why', this.data.why)
      res.save()
      wx.showToast({
        title: '提交成功，刷新后显示最新消息',
        icon: 'none'
      })
    }).catch(err => {
      console.log(err)
      wx.showToast({
        title: '提交失败',
        icon: 'none'
      })
    })
  },
  shitijiao(e) {
    // this.setData({
    //   objectId: e.currentTarget.dataset.text
    // })
    // console.log(typeof (this.data.objectId))
    // var a = this.data.objectId
    const query = Bmob.Query("_User");
    query.get(this.data.objectId).then(res => {
>>>>>>> 优化管理员界面处理预约信息
      console.log(res)
      res.set('come', true)
      res.save()
    }).catch(err => {
      console.log(err)
    })
<<<<<<< HEAD
    query.get(a).then(res => {
=======
    query.get(this.data.objectId).then(res => {
>>>>>>> 优化管理员界面处理预约信息
      console.log(res)
      res.set('tec', this.data.tec)
      res.save()
    }).catch(err => {
      console.log(err)
    })
<<<<<<< HEAD
    query.get(a).then(res => {
      console.log(res)
      res.set('price', this.data.price)
      res.save()
    }).catch(err => {
      console.log(err)
=======
    query.get(this.data.objectId).then(res => {
      console.log(res)
      res.set('price', this.data.price)
      res.save()
      wx.showToast({
        title: '提交成功，刷新后显示最新消息',
        icon: 'none'
      })
    }).catch(err => {
      console.log(err)
      wx.showToast({
        title: '提交失败',
        icon: 'none'
      })
>>>>>>> 优化管理员界面处理预约信息
    })
  },
  onLoad: function (options) {
    var that = this;
    const query = Bmob.Query("_User");
    query.equalTo("info", "==", "发友");
    query.find().then(res => {
      var list = res;
      that.setData({
        list: list
      })
      console.log(list)
    });
    // 获取从预约中点击进来的id objectId
    this.setData({
      user_id: options.user_id
    })
    // console.log(this.data.user_id)

    wx.showLoading({
      title: '正在查询',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
  }
})