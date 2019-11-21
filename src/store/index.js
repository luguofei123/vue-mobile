import Vue from 'vue'
import Vuex from 'vuex'
import Tagsrecord from '@/store/modules/tagsrecord/index'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Tagsrecord: Tagsrecord
  }
})
