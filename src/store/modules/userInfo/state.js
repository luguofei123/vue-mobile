// 刷新页面，数据仍然保留的方法目前至少有3种
// 1 直接将数据写如state，每次刷新直接从本地存储获取
// 2 路由跳转前判断缓存是否有token，有的话就执行store.commit('setToken'),将token写入到state
// 3 页面刷新会执行页面一个事件，在此事件中执行store.commit('setToken')，将token写入state
const state = {
  latitude: '', // 当前位置纬度
  longitude: '', // 当前位置经度
  cartList: {}, // 加入购物车的商品列表
  shopDetail: null, // 商家详情信息
  userInfo: null, // 用户信息
  shopid: null, // 商铺id
  remarkText: null, // 可选备注内容
  inputText: '', // 输入备注内容
  invoice: false, // 开发票
  newAddress: [], // 确认订单页新的地址
  searchAddress: null, // 搜索并选择的地址
  geohash: '31.22299,121.36025', // 地址geohash值
  choosedAddress: null, // 选择地址
  addressIndex: null, // 选择地址的索引值
  needValidation: null, // 确认订单时是否需要验证
  cartId: null, // 购物车id
  sig: null, // 购物车sig
  orderParam: null, // 订单的参数
  orderMessage: null, // 订单返回的信息
  orderDetail: null, // 订单详情
  login: true, // 是否登录
  imgPath: null, // 头像地址
  removeAddress: [], // 移除地址
  addAddress: '', // 新增地址
  question: null, // 问题详情
  cartPrice: null // 会员卡价格
}
export default state
