
const state = {
  titleBarText: ''
}

const mutations = {
  SET_TITLE: (state, title) => {
    state.titleBarText = title
  }
}

const actions = {
  setTitle({ commit }, title) {
    commit('SET_TITLE', title)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

