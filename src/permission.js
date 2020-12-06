import router from './router'
import store from './store'
import getPageTitle from '@/utils/get-page-title'

router.beforeEach((to, from, next) => {
  // start loading
  store.dispatch('settings/changeSetting', {
    key: 'isLoading',
    value: true
  })

  // set page title
  document.title = getPageTitle(to.meta.title)
  next()
})

router.afterEach(() => {
  // finish loading
  store.dispatch('settings/changeSetting', {
    key: 'isLoading',
    value: false
  })
})
