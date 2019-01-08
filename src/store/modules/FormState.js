
import Vue from 'vue'

const state = {
    currentTargetQAIndex: 0,
    currentTargetPage: 'Home',
    qnaState: [false, false, false, false, false]
}

const mutations = {
    SET_TARGET_QA_INDEX (state, index) {
        state.currentTargetQAIndex = index
    },
    SET_QNA_STATE (state, params) {
        const index = params.index
        const currentState = params.currentState
        Vue.set(state.qnaState, index, currentState)
    }
}

const actions = {
    setTargetQAIndex ({ commit }, index) {
        commit('SET_TARGET_QA_INDEX', index)
    },
    setQnaState ({ commit }, { index, currentState }) {
        const params = {
            index: index,
            currentState: currentState
        }
        console.log(params)
        commit('SET_QNA_STATE', params)
    }
}

const getters = {
    getCurrentTargetQAIndex: () => state.currentTargetQAIndex
}

export default {
    state,
    mutations,
    actions,
    getters
}
