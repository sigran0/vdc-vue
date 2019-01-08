<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap justify-center>
            <video-area class="video-margin"/>
        </v-layout>
        <v-layout row wrap justify-center>
            <v-expansion-panel>
                <v-expansion-panel-content
                    v-for="(item, i) in 5"
                    :key="i"
                >
                    <div slot="header">Q & A {{ item }}</div>
                    <v-flex xs12 md4>
                        <InputForm :index="i"/>
                    </v-flex>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-layout>
    </v-container>
</template>

<script>

import VideoArea from '../components/VideoArea'
import InputForm from '../components/InputForm'
export default {
    name: 'Qna',
    components: { InputForm, VideoArea }
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
    margin-bottom: 30px;
}
</style>