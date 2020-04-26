import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'
import './adaptive.js'
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)
import router from './routes.js'
import App from './App.vue'
var vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    render:c=>c(App),
    router
})