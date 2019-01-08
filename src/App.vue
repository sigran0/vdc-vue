<template>
    <div id="app">
        <TitleBar />
        <div class="container">
            <router-view />
        </div>
        <Navbar />
    </div>
</template>

<script>

import Navbar from './components/BottomNavigation'
import TitleBar from './components/TitleBar'

export default {
    // eslint-disable-next-line vue/name-property-casing
    name: 'app',
    components: {
        TitleBar,
        Navbar
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

</style>
