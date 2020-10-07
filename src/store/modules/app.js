const state = {
  userName: '',
  userInfo: {}
}
const getters = {
  userName: state => state.userName,
  userInfo: state => state.userInfo
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_USER_INFO(state, info) {
    state.userInfo = info
  }
}
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  setUserInfo({ commit }, info) {
    commit('SET_USER_INFO', info)
  },
  loginOut({ commit }) {
    commit('SET_USER_INFO', {})
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
