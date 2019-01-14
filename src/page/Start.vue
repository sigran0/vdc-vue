<template>
    <div>
        <h3>Hello world</h3>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'Start',
        props: {
            batch: {
                type: String,
                default: '0',
                required: false
            }
        },
        mounted () {
            this.setBatch(this.batch)
                .then(() => {
                    console.log('batch:', this.batch)
                    this.$router.push('home')
                })
        },
        methods: {
            ...mapActions(['setBatch'])
        }
    }
</script>

<style scoped>

</style>