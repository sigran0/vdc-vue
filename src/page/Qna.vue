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
                <v-btn
                    :disabled="loadingDialog"
                    :loading="loadingDialog"
                    class="button_margin white--text"
                    color="purple darken-2"
                    @click="onSubmit"
                >
                    SUBMIT
                </v-btn>
            </v-flex>
        </v-layout>
        <v-dialog
            v-model="loadingDialog"
            hide-overlay
            persistent
            width="300"
        >
            <v-card
                color="primary"
                dark
            >
                <v-card-text>
                    Please Stand by...
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-layout row justify-center>
            <v-dialog v-model="alertDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card>
                    <v-card-title class="headline">Thank you for your efforts.</v-card-title>
                    <v-card-text>
                        Copy the below text and type in Mturk Survey form
                        <br/>
                        <br/>
                        {{ token }}
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat @click="onClickAgree">Agree</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
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
            items: 5,
            loadingDialog: false,
            alertDialog: false,
            token: ''
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
        })
    },
    mounted () {
        this.fetchVideoUrl()
    },
    methods: {
        ...mapActions(['showSnackbar', 'isAllComplete', 'fetchVideoUrl', 'commitQnA']),
        closeAll () {
            this.panel = []
        },
        onSubmit () {
            this.isAllComplete().then((result) => {
                if (result === true) {
                    const params = { title: 'Thank you for your effort.' }
                    this.showSnackbar(params)
                    this.loadingDialog = true
                    this.commitQnA().then(token => {
                        this.loadingDialog = false
                        this.token = token
                        this.alertDialog = true
                    })
                } else {
                    const params = { title: 'Please enter all items', color: 'red' }
                    this.showSnackbar(params)
                }
            })
        },
        onClickAgree () {
            this.copyStringToClipboard(this.token)
            window.location = 'https://www.naver.com'
        },
        copyStringToClipboard (str) {
            // Create new element
            const el = document.createElement('textarea')
            // Set value (string to be copied)
            el.value = str
            // Set non-editable to avoid focus and move outside of view
            el.setAttribute('readonly', '')
            el.style = { position: 'absolute', left: '-9999px' }
            document.body.appendChild(el)
            // Select text inside element
            el.select()
            // Copy text to clipboard
            document.execCommand('copy')
            // Remove temporary element
            document.body.removeChild(el)
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