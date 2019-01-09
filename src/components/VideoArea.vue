
<template>
    <div>
        <!--<video-player-->
            <!--class="video-player-box"-->
            <!--ref="videoPlayer"-->
            <!--:options="playerOptions"-->
            <!--:playsinline="true"-->
            <!--/>-->
        <vue-plyr>
            <video id="player" :src="videoUrl">
            </video>
        </vue-plyr>
    </div>
</template>

<script>
    // import 'video.js/dist/video-js.css'
    // import { videoPlayer } from 'vue-video-player'

    import Vue from 'vue'
    import VuePlyr from 'vue-plyr'

    Vue.use(VuePlyr)

    export default {
        name: 'VideoArea',
        // components: {
        //     videoPlayer
        // },
        props: {
            videoUrl: String
        },
        computed: {
            player () {
                return this.$refs.player.player
            }
        },
        watch: {
            videoUrl: {
                handler: function (videoId) {
                    console.log('new video id', videoId)
                    console.log(this.player)
                    this.player.play()
                }
            }
        }
    }
</script>

<style scoped>

</style>