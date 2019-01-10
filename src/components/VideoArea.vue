
<template>
    <div>
        <video controls preload="auto" loop autoplay>
            <source :src="videoUrl" type="video/mp4">
            <track kind="subtitles" srclang="en" label="English" :src="subtitleUrl" default >
        </video>
    </div>
</template>

<script>
    export default {
        name: 'VideoArea',
        props: {
            videoUrl: String,
            subtitleUrl: String
        },
        data () {
            return {
                player: {}
            }
        },
        watch: {
            videoUrl: 'updateVideoUrl',
            subtitleUrl: 'updateSubtitleUrl'
        },
        methods: {
            updateVideoUrl (videoUrl) {
                this.videoUrl = videoUrl
            },
            updateSubtitleUrl (subtitleUrl) {
                this.subtitleUrl = subtitleUrl
            }
        }
    }
</script>

<style scoped>

</style>