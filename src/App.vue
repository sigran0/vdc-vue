<template>
    <div id="app">
        <Navbar></Navbar>
        <div class="container">
            <VideoArea class="video_margin d-flex justify-content-center" />
            <ul>
                <li v-for="qa in getQaList">
                    {{ qa.index }}
                </li>
            </ul>
            <button type="submit" class="btn btn-primary w-100 button_margin">
                Submit
            </button>
        </div>
    </div>
</template>

<script>
import VideoArea from './components/VideoArea'
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'app',
    components: {
        Navbar,
        VideoArea,
        TextArea
    },
    beforeMount () {
        this.initialize()
    },
    mounted () {

    },
    methods: {
        ...mapActions(['initialize']),
        ...mapGetters(['getQa', 'getQaSize', 'getQaList'])
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.video_margin {
    margin-bottom: 30px;
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
