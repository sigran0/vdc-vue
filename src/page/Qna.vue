<template>
    <v-container grid-list-md>
        <v-layout row wrap justify-center>
            <video-area class="video-margin"/>
        </v-layout>
        <v-layout row wrap justify-center>
            <v-expansion-panel
                    inset
                    v-model="panel"
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
                            :q.sync="getQaList()[i].question"
                            :a1.sync="getQaList()[i].answer1"
                            :a2.sync="getQaList()[i].answer2"
                            :a3.sync="getQaList()[i].answer3"
                            :a4.sync="getQaList()[i].answer4"
                            :a5.sync="getQaList()[i].answer5"
                    />
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-layout>
        <v-layout row wrap justify-center>
            <v-flex>
                <v-btn class="button_margin">SUBMIT</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

import VideoArea from '../components/VideoArea'
import InputForm from '../components/InputForm'
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'Qna',
    components: { InputForm, VideoArea },
    data () {
        return {
            panel: [],
            items: 5
        }
    },
    computed: {
        ...mapState({
            qnaState: state => state.FormState.qnaState
        })
    },
    mounted () {
        this.$on('closeAll', () => {
            console.log('hello')
            this.closeAll()
        })
    },
    methods: {
        ...mapGetters(['getQaList']),
        closeAll () {
            this.panel = []
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