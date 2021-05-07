import Vue from 'vue'
import Router from 'vue-router'

import plan from '@/components/Plan.vue'
import subscription from '@/components/Subscription.vue'

Vue.use(Router)


let router = new Router({
    routes: [
        {
            path: '/',
            name: 'plan',
            component: plan,
        },
        {
            path: '/subscription',
            name: 'subscription',
            component: subscription,
        },
    ]
})

export default router