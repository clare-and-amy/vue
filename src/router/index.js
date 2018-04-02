import Vue from 'vue'
import Router from 'vue-router'

import other from '@/router/other'

Vue.use(Router)

let routes = []
routes = routes.concat(other)

export default new Router({
  routes: routes
})
