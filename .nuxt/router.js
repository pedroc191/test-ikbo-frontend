import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d7625fb2 = () => interopDefault(import('..\\pages\\account\\forgot-password.vue' /* webpackChunkName: "pages/account/forgot-password" */))
const _6c573fea = () => interopDefault(import('..\\pages\\account\\login.vue' /* webpackChunkName: "pages/account/login" */))
const _6267a6c7 = () => interopDefault(import('..\\pages\\pages\\inventory.vue' /* webpackChunkName: "pages/pages/inventory" */))
const _3025719a = () => interopDefault(import('..\\pages\\pages\\product.vue' /* webpackChunkName: "pages/pages/product" */))
const _0143e633 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account/forgot-password",
    component: _d7625fb2,
    name: "account-forgot-password"
  }, {
    path: "/account/login",
    component: _6c573fea,
    name: "account-login"
  }, {
    path: "/pages/inventory",
    component: _6267a6c7,
    name: "pages-inventory"
  }, {
    path: "/pages/product",
    component: _3025719a,
    name: "pages-product"
  }, {
    path: "/",
    component: _0143e633,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
