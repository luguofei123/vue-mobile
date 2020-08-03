// 可以理解为state的计算属性
const getters = {
  doneTodos (state) {
    return state.myarr.filter(todo => todo.done)
  }
}
export default getters
