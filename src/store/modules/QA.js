
import api from '../../api'

const state = {
    qaSize: 5,
    qaList: [],
    targetVideoUrl: '',
    targetSubtitleUrl: '',
    batch: 0
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
    },
    SET_VIDEO_URL (state, videoUrl) {
        state.targetVideoUrl = videoUrl
    },
    SET_SUBTITLE_URL (state, subtitleUrl) {
        state.targetSubtitleUrl = subtitleUrl
    },
    SET_BATCH (state, batch) {
        state.batch = batch
    },
    INITIALIZE_QA (state) {
        state.qaSize = 5
        state.qaList = []
        state.targetVideoUrl = ''
        state.targetSubtitleUrl = ''
        state.batch = 0
        mutations.INITIALIZE_STATE(state)
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
    },
    fetchVideoUrl ({ commit }) {
        api.getRandomItem()
            .then((res) => {
                const videoUrl = res.data.videoUrl
                const subtitleUrl = res.data.vttUrl
                //  const vttUrl = res.data.data.vttUrl
                commit('SET_VIDEO_URL', videoUrl)
                commit('SET_SUBTITLE_URL', subtitleUrl)
            })
    },
    commitQnA () {
        return api.postCommitItem(state.batch, state.qaList)
            .then((data) => {
                return data.data.token
            })
    },
    setBatch ({ commit }, batch) {
        commit('SET_BATCH', batch)
    },
    initializeQA ({ commit }) {
        commit('INITIALIZE_QA')
    }
}

const getters = {
    getQa: (index) => state.qaList[index],
    getQaList: () => state.qaList,
    getQaSize: () => state.qaSize,
    getVideoUrl: () => state.targetVideoUrl
}

export default {
    state,
    mutations,
    actions,
    getters
}
