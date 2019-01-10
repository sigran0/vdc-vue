<template>
    <v-container grid-list-md>
        <v-layout row wrap justify-center>
            <video-area class="video-margin" v-if="videoUrl !== ''" :video-url="videoUrl" :subtitle-url="subtitleUrl"/>
        </v-layout>
        <v-layout row wrap justify-center>
            <v-expansion-panel
                    inset
                    v-model="panel"
                    expand
            >
                <v-expansion-panel-content
                    v-for="(item, i) in 5"
                    :key="i"
                >
                    <v-icon slot="actions" color="teal" v-if="qnaState[i]">done</v-icon>
                    <v-icon slot="actions" color="red" v-if="!qnaState[i]">error</v-icon>
                    <div slot="header">Q & A {{ item }}</div>
                    <InputForm
                            :index="i"
                            :q.sync="qaList[i].question"
                            :a1.sync="qaList[i].answer1"
                            :a2.sync="qaList[i].answer2"
                            :a3.sync="qaList[i].answer3"
                            :a4.sync="qaList[i].answer4"
                            :a5.sync="qaList[i].answer5"
                    />
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-layout>
        <v-layout row wrap justify-center>
            <v-flex>
                <v-btn class="button_margin" @click="onSubmit">SUBMIT</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

import VideoArea from '../components/VideoArea'
import InputForm from '../components/InputForm'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'Qna',
    components: { InputForm, VideoArea },
    data () {
        return {
            panel: [false, false, false, false, false],
            items: 5
        }
    },
    computed: {
        ...mapState({
            qnaState: state => state.FormState.qnaState,
            videoUrl: state => state.QA.targetVideoUrl,
            subtitleUrl: state => state.QA.targetSubtitleUrl
        }),
        ...mapGetters({
            qaList: 'getQaList'
        })
    },
    created () {
        this.$EventBus.$on('closeAll', (index) => {
            this.closeAll()
            console.log('good')
        })
    },
    mounted () {
        this.fetchVideoUrl()
    },
    methods: {
        ...mapActions(['showSnackbar', 'isAllComplete', 'fetchVideoUrl']),
        closeAll () {
            this.panel = []
        },
        onSubmit () {
            console.log(this.videoUrl)
            this.isAllComplete().then((result) => {
                if (result === true) {
                    const params = { title: 'Thank you for your effort.' }
                    this.showSnackbar(params)
                } else {
                    const params = { title: 'Please enter all items', color: 'red' }
                    this.showSnackbar(params)
                }
            })
        }
    }
}
</script>

<style scoped>

.video-margin {
    margin-bottom: 15px;
    margin-top: 30px;
}

.card_margin {
    margin-bottom: 10px;
    margin-top: 10px;
}

.button_margin {
    margin-top: 20px;
    margin-bottom: 40px;

}
</style>