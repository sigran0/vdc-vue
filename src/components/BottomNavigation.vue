<template>
    <v-bottom-nav
            :active.sync="bottomNav"
            :value="true"
            :app="true"
            color="transparent"
    >
        <v-btn
                color="teal"
                flat
                value="recent"
                to="/home"
        >
            <span>Home</span>
            <v-icon>home</v-icon>
        </v-btn>

        <v-btn
                color="teal"
                flat
                value="favorites"
                to="/qna"
        >
            <span>Q & A</span>
            <v-icon>style</v-icon>
        </v-btn>
    </v-bottom-nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data () {
            return {
                bottomNav: 'recent'
            }
        }
    }
</script>

<style scoped>

</style>