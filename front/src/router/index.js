import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const helloworld = () => import('../views/helloworld.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: helloworld }
    ]
  })
}
