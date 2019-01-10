<template>
    <div id="app">
        <TitleBar />
        <div class="container container-margin">
            <transition :name="transitionName">
                <router-view class="child-view"/>
            </transition>
        </div>
        <Snackbar />
        <Navbar/>
    </div>
</template>

<script>

import Navbar from './components/BottomNavigation'
import TitleBar from './components/TitleBar'
import Snackbar from './components/Snackbar'

import { mapActions } from 'vuex'

export default {
    // eslint-disable-next-line vue/name-property-casing
    name: 'app',
    components: {
        Snackbar,
        TitleBar,
        Navbar
    },
    data () {
        return {
            transitionName: 'slide-left'
        }
    },
    watch: {
        '$route' (to, from) {
            if (from.path !== '/qna') {
                this.transitionName = 'slide-left'
            } else {
                this.transitionName = 'slide-right'
            }
            console.log(this.transitionName)
        }
    },
    beforeMount () {
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

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}
.child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

</style>
