import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7433793a = () => interopDefault(import('..\\pages\\my-resume.vue' /* webpackChunkName: "pages/my-resume" */))
const _713b819e = () => interopDefault(import('..\\pages\\my-vision.vue' /* webpackChunkName: "pages/my-vision" */))
const _f6267fe2 = () => interopDefault(import('..\\pages\\recommendations.vue' /* webpackChunkName: "pages/recommendations" */))
const _3d44cfa9 = () => interopDefault(import('..\\pages\\my-reflections\\cld.vue' /* webpackChunkName: "pages/my-reflections/cld" */))
const _55873eb7 = () => interopDefault(import('..\\pages\\my-reflections\\mpl.vue' /* webpackChunkName: "pages/my-reflections/mpl" */))
const _790ea07c = () => interopDefault(import('..\\pages\\my-reflections\\observations-cycle.vue' /* webpackChunkName: "pages/my-reflections/observations-cycle" */))
const _98da22e2 = () => interopDefault(import('..\\pages\\my-work\\assignments.vue' /* webpackChunkName: "pages/my-work/assignments" */))
const _c0cba7c8 = () => interopDefault(import('..\\pages\\my-work\\lesson-plans.vue' /* webpackChunkName: "pages/my-work/lesson-plans" */))
const _0a883928 = () => interopDefault(import('..\\pages\\my-work\\unit-plans.vue' /* webpackChunkName: "pages/my-work/unit-plans" */))
const _5ea9b572 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/my-resume",
    component: _7433793a,
    name: "my-resume"
  }, {
    path: "/my-vision",
    component: _713b819e,
    name: "my-vision"
  }, {
    path: "/recommendations",
    component: _f6267fe2,
    name: "recommendations"
  }, {
    path: "/my-reflections/cld",
    component: _3d44cfa9,
    name: "my-reflections-cld"
  }, {
    path: "/my-reflections/mpl",
    component: _55873eb7,
    name: "my-reflections-mpl"
  }, {
    path: "/my-reflections/observations-cycle",
    component: _790ea07c,
    name: "my-reflections-observations-cycle"
  }, {
    path: "/my-work/assignments",
    component: _98da22e2,
    name: "my-work-assignments"
  }, {
    path: "/my-work/lesson-plans",
    component: _c0cba7c8,
    name: "my-work-lesson-plans"
  }, {
    path: "/my-work/unit-plans",
    component: _0a883928,
    name: "my-work-unit-plans"
  }, {
    path: "/",
    component: _5ea9b572,
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
