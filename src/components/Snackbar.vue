<template>
    <v-snackbar
            v-model="show"
            :color="color"
            :timeout="timeout"
    >
        {{ title }}
        <v-btn
                dark
                flat
                @click="show = false"
        >
            Close
        </v-btn>
    </v-snackbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Snackbar',
    computed: {
        show: {
            get: function () {
                return this.$store.state.Snackbar.show
            },
            set: function (value) {
                return this.setShow(value)
            }
        },
        ...mapState({
            title: state => state.Snackbar.title,
            color: state => state.Snackbar.color,
            timeout: state => state.Snackbar.timeout
        })
    },
    methods: {
        ...mapActions(['setShow'])
    }
}
</script>

<style scoped>

</style>