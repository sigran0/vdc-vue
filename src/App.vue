<template>
    <div id="app">
        <TitleBar />
        <div class="container container-margin">
            <router-view />
        </div>
        <Navbar/>
    </div>
</template>

<script>

import Navbar from './components/BottomNavigation'
import TitleBar from './components/TitleBar'

import { mapActions } from 'vuex'

export default {
    // eslint-disable-next-line vue/name-property-casing
    name: 'app',
    components: {
        TitleBar,
        Navbar
    },
    beforeMount () {
        console.log('call beforeMount')
        this.initialize()
    },
    methods: {
        ...mapActions(['initialize'])
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

.container-margin {
    margin-bottom: 100px;
    padding-bottom: 100px;
}

</style>
