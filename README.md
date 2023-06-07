# vue-router-better-scroller

[![NPM version](https://img.shields.io/npm/v/vue-router-better-scroller?color=a1b858&label=)](https://www.npmjs.com/package/vue-router-better-scroller)

Enhanced [scroll behavior](https://router.vuejs.org/guide/advanced/scroll-behavior.html) for [Vue Router v4](https://router.vuejs.org/).

## Motivation

Vue Router currently only preserves the scrolling state on the `window` object. Sometimes, in your apps you might have a different scrollable element (e.g. `body`, `#app`) or even multiple ones. To gain a better user experience, we typically want to preserve the scroll state of them when going back and forth.

This plugin is introduced to experiment with a better way to handle such cases. With a lot of help from [@posva](https://github.com/posva) 🙏.

## Install

```bash
npm i vue-router-better-scroller
```

In your main entry:
  
```ts
import { createRouter } from 'vue-router'
import { createRouterScroller } from 'vue-router-better-scroller'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.use(createRouterScroller({
  selectors: {
    'window': true,
    'body': true,
    '.scrollable': true
  },
}))

app.mount('#app')
```

## Options

// TODO

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2022 [Anthony Fu](https://github.com/antfu)
