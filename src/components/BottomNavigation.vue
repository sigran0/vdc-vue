<template>
    <v-bottom-nav
            :value="true"
            :app="true"
            color="red lighten-2"
    >
        <v-btn
                color="white"
                flat
                value="recent"
                to="/home"
        >
            <span>Home</span>
            <v-icon>home</v-icon>
        </v-btn>

        <v-btn
                color="white"
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
        name: 'Navbar'
    }
</script>

<style scoped>

</style>