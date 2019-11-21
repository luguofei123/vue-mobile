// 一条重要的原则就是要记住 mutation 必须是同步函数
import router from '@/router/router'
const mutations = {
  SET_COLLAPSE: (state, bool) => {
    state.collapse = bool
  },
  ADD_TAGSLIST: (state, route) => {
    const isExist = state.tagsList.some(item => {
      return item.path === route.fullPath
    })
    if (!isExist) {
      if (state.tagsList.length >= 8) {
        state.tagsList.shift()
      }
      state.tagsList.push({
        title: route.meta.title,
        path: route.fullPath,
        name: route.matched[1].components.default.name
      })
    }
  },
  DEL_TAGSLIST: (state, index) => {
    const delItem = state.tagsList.splice(index, 1)[0]
    const curItem = state.tagsList[index] ? state.tagsList[index] : state.tagsList[index - 1]
    if (curItem) {
      delItem.path === router.currentRoute.fullPath && router.push(curItem.path)
    } else {
      router.push('/')
    }
  },
  SET_TAGSLIST: (state, arr) => {
    state.tagsList = arr
  }
}
export default mutations
