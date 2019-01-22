export default {
  namespaced: true,
  state: {
    direction: 'left',
    old_url_key: ''
  },
  mutations: {
    updateDirection(state, direction) {
      state.direction = direction
    },
    updateOldUrlKey(state, key) {
      state.old_url_key = key
    },
  }
}
