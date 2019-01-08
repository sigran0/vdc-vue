
const state = {
    title: '',
    color: '',
    timeout: 6000,
    show: false
}

const mutations = {
    SET_TITLE (state, title) {
        state.title = title
    },
    SET_COLOR (state, color) {
        state.color = color
    },
    SET_TIMEOUT (state, timeout) {
        state.timeout = timeout
    },
    SET_SHOW (state, show) {
        state.show = show
    }
}

const actions = {
    showSnackbar ({ commit }, params) {
        const title = params.title
        const color = params.color || 'cyan'
        const timeout = params.timeout || 3000

        commit('SET_TITLE', title)
        commit('SET_COLOR', color)
        commit('SET_TIMEOUT', timeout)
        commit('SET_SHOW', true)
    },
    setShow ({ commit }, show) {
        commit('SET_SHOW', show)
    }
}

const getters = {
}

export default {
    state,
    mutations,
    actions,
    getters
}
