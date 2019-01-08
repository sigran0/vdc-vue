
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
    },
    SET_QNA: function (state, qna) {
        state.qaList[qna.index].index = qna.index
        state.qaList[qna.index].question = qna.question
        state.qaList[qna.index].answer1 = qna.answer1
        state.qaList[qna.index].answer2 = qna.answer2
        state.qaList[qna.index].answer3 = qna.answer3
        state.qaList[qna.index].answer4 = qna.answer4
        state.qaList[qna.index].answer5 = qna.answer5
    },
    CLEAR (state, index) {
        state.qaList[index] = {
            index: index,
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            answer5: ''
        }
    }
}

const actions = {
    initialize ({ commit }) {
        commit('INITIALIZE_STATE')
    },
    setQnA ({ commit }, qna) {
        commit('SET_QNA', qna)
    },
    clearItem ({ commit }, index) {
        commit('CLEAR', index)
    },
    isAllComplete () {
        let result = true
        state.qaList.forEach((qa) => {
            if (qa.question.length === 0) {
                result = false
            }
            if (qa.answer1.length === 0) {
                result = false
            }
            if (qa.answer2.length === 0) {
                result = false
            }
            if (qa.answer3.length === 0) {
                result = false
            }
            if (qa.answer4.length === 0) {
                result = false
            }
            if (qa.answer5.length === 0) {
                result = false
            }
        })
        return result
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
