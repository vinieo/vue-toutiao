import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const topNav = ((resolve) => {
  import('components/topNav/topNav').then((module) => {
    resolve(module)
  })
})

const indexBody = ((resolve) => {
  import('components/indexBody/indexBody').then((module) => {
    resolve(module)
  })
})

const bottomNav = ((resolve) => {
  import('components/bottomNav/bottomNav').then((module) => {
    resolve(module)
  })
})

const adding = ((resolve) => {
  import('components/adding/adding').then((module) => {
    resolve(module)
  })
})

const me = ((resolve) => {
  import('components/me/me').then((module) => {
    resolve(module)
  })
})

const news = ((resolve) => {
  import('components/news/news').then((module) => {
    resolve(module)
  })
})

const video = ((resolve) => {
  import('components/video/video').then((module) => {
    resolve(module)
  })
})

const wap = ((resolve) => {
  import('components/wap/wap').then((module) => {
    resolve(module)
  })
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        top: topNav,
        main: indexBody,
        bottom: bottomNav
      },
      children:[{
        path:'/',
        name:'all',
        component: wap
      }]
    },
    {
      path: '/news',
      name: 'news',
      components: {
        top: topNav,
        main: news,
        bottom: bottomNav
      }
    },
    {
      path: '/adding',
      name: 'adding',
      components: {
        top: topNav,
        main: adding,
        bottom: bottomNav
      }
    },
    {
      path: '/video',
      name: 'video',
      components:{
        top: topNav,
        main: video,
        bottom: bottomNav
      }
    },
    {
      path: '/me',
      name: 'me',
      components:{
        top: topNav,
        main: me,
        bottom: bottomNav
      }
    }
  ]
})
