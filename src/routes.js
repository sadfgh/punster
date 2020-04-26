import VueRouter from 'vue-router'

import home from './routesComponents/home.vue'
import video from './routesComponents/video.vue'
import img from './routesComponents/img.vue'
import text from './routesComponents/text.vue'

var router = new VueRouter({
    routes:[
        {
            path:'/home',
            component:home
        },
        {
            path:'/',
            component:home
        },
        {
            path:'/video',
            component:video
        },
        {
            path:'/img',
            component:img
        },
        {
            path:'/text',
            component:text
        }
    ]
})

export default router