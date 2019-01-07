
const state = {
    qaSize: 5,
    qaList: []
}

const mutations = {
    INITIALIZE_STATE (state) {
        for (let c = 0; c < state.qaSize; c++) {
            const qaPair = {
                index: c,
                question: '',
                answer1: '',
                answer2: '',
                answer3: '',
                answer4: '',
                answer5: ''
            }
            state.qaList.push(qaPair)
        }
        console.log('시발', state.qaList)
    },
    SET_QA: function (state, { index, question, answer1, answer2, answer3, answer4, answer5 }) {
        state.qaList[index].index = index
        state.qaList[index].question = question
        state.qaList[index].answer1 = answer1
        state.qaList[index].answer2 = answer2
        state.qaList[index].answer3 = answer3
        state.qaList[index].answer4 = answer4
        state.qaList[index].answer5 = answer5
    }
}

const actions = {
    initialize ({ commit }) {
        commit('INITIALIZE_STATE')
    }
}

const getters = {
    getQa: (index) => state.qaList[index],
    getQaList: () => state.qaList,
    getQaSize: () => state.qaSize
}

export default {
    state,
    mutations,
    actions,
    getters
}
