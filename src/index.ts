import type { Plugin } from 'vue'
import { nextTick } from 'vue'
import { isNavigationFailure } from 'vue-router'
import type { RouteLocationNormalized, RouteLocationNormalizedLoaded, Router } from 'vue-router'
import type { NavigationType, RouterScrollBehaviorOptions, ScrollPositionCoordinates, ScrollPositionCoordinatesGroup } from './types'

const STATE_KEY = 'vueRouterScroller'

/**
 * Setup router scroll behavior directly with a router instance.
 */
export function setupRouterScroller(router: Router, options: RouterScrollBehaviorOptions) {
  if (router.options.scrollBehavior)
    console.warn('`scrollBehavior` options in Vue Router is overwritten by `vue-router-scroller` plugin, you can remove it from createRouter()')

  router.options.scrollBehavior = () => {}

  const positionsMap = new Map<string, ScrollPositionCoordinatesGroup>()

  // `beforeLeave` but after all other hooks
  router.beforeResolve((to, from) => {
    // `beforeResolve` is also called when going back in history, we ignores it
    if (history.state?.current === to.fullPath)
      return

    const pos = capturePositions(options)
    const key = getScrollKey(from.fullPath)
    positionsMap.set(key, pos)
    history.replaceState({ ...history.state, [STATE_KEY]: pos }, '')
  })

  router.afterEach((to, from, failure) => {
    if (isNavigationFailure(failure))
      return

    const key = getScrollKey(to.fullPath)
    const pos = history.state[STATE_KEY] || positionsMap.get(key)
    const type = history.state[STATE_KEY] ? 'history' : 'push'

    nextTick(() => {
      applyPositions(to, from, pos, type, options)
    })
  })
}

/**
 * Set up router scroll behavior as a Vue plugin.
 *
 * @example
 * ```ts
 * import { createRouter } from 'vue-router'
 * import { createRouterScroller } from 'vue-router-better-scroller'
 *
 * const app = createApp(App)
 * const router = createRouter({ ... })
 *
 * app.use(router)
 * app.use(createRouterScroller({ ... }) // <-- this
 *
 * app.mount('#app')
 * ```
 */
export function createRouterScroller(options: RouterScrollBehaviorOptions): Plugin {
  return {
    install(app) {
      const router = app.config.globalProperties.$router
      if (!router)
        throw new Error('Router instance is not found on this Vue app. This plugin should be installed after Vue Router.')
      setupRouterScroller(router, options)
    },
  }
}

function getScrollKey(path: string, delta = 0): string {
  const position: number = history.state ? history.state.position - delta : -1
  return position + path
}

function capturePositions(options: RouterScrollBehaviorOptions) {
  const pos: ScrollPositionCoordinatesGroup = {}
  for (const [selector] of Object.entries(options.selectors)) {
    const element = querySelector(selector)
    if (!element)
      continue
    pos[selector] = getScrollPosition(element)
  }
  return pos
}

function querySelector(name: string) {
  if (typeof window === 'undefined')
    return undefined
  if (name === 'body')
    return document.body
  if (name === 'window')
    return window
  return document.querySelector(name)
}

function getScrollPosition(el: Element | Window): ScrollPositionCoordinates {
  if (el instanceof Window)
    return { left: window.scrollX, top: window.scrollY }
  else
    return { left: el.scrollLeft, top: el.scrollTop }
}

async function applyPositions(
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  pos: ScrollPositionCoordinatesGroup | undefined,
  type: NavigationType,
  options: RouterScrollBehaviorOptions,
) {
  for (const [selector, handler] of Object.entries(options.selectors)) {
    const element = querySelector(selector)
    if (!element)
      continue

    let position = pos?.[selector]
    if (typeof handler === 'function') {
      const result = await handler({
        to,
        from,
        element,
        selector,
        type,
        savedPosition: position,
      })
      if (!result)
        continue

      if (result !== true)
        position = result
    }
    else if (handler === true) {
      // by default, when navigate through a link, we don't preserve scroll position
      if (type === 'push')
        position = undefined
    }

    element.scrollTo({
      behavior: options.behavior,
      ...position || { top: 0, left: 0 },
    })
  }
}
