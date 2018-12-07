const state = {
  $s_cachedView: []
}

const getters = {
}

const mutations = {
  $m_addView (state, view) {
    if (!view.name) {
      return
    }
    if (!view.meta.keepAlive) {
      return
    }
    if (state.$s_cachedView.includes(view.name)) {
      console.log('store has fullpath of route')
      return
    }
    console.log('store set fullPath of route')
    state.$s_cachedView.push(view.name) // 利用keep-alive的include来判断是否需要对route进行缓存
    console.log(state.$s_cachedView)
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
