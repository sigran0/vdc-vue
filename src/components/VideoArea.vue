
<template>
    <div>
        <video-player
            class="video-player-box"
            ref="videoPlayer"
            :options="playerOptions"
            :playsinline="true"
            />
    </div>
</template>

<script>
    import 'video.js/dist/video-js.css'
    import { videoPlayer } from 'vue-video-player'

    export default {
        name: 'VideoArea',
        components: {
            videoPlayer
        },
        data () {
            return {
                playerOptions: {
                    muted: true,
                    autoplay: true,
                    language: 'en',
                    sources: [{
                        type: 'video/mp4',
                        src: 'http://localhost:3000/videos/yoy.mp4'
                    }]
                }
            }
        },
        computed: {
            player () {
                return this.$refs.videoPlayer.player
            }
        }
    }
</script>

<style scoped>

</style>