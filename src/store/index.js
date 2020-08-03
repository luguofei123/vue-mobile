import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from '@/store/modules/userInfo/index'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    userInfo: userInfo
  }
})
