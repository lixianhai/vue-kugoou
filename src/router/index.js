import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/Layout'

Vue.use(VueRouter)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 *                                如果设置为true，则项目将不会显示在边栏中（默认值为false）
 * alwaysShow: true               if set true, will always show the root menu
 *                                如果设置为真，将始终显示根菜单
 *                                if not set alwaysShow, when item has more than one children route,
 *                                如果未设置AlwaysShow，则当项有多个子路由时，
 *                                it will becomes nested mode, otherwise not show the root menu
 *                                它将成为嵌套模式，否则不显示根菜单
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 *                                如果设置为no redirect，则不会在breadcrumb中重定向
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 *                                名称由<keep alive>使用（必须设置！！！！）
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
                                 控制页面角色（可以设置多个角色）
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
                                 侧边栏和面包屑中显示的名称（推荐集）
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
                                 如果设置为true，则不会缓存该页（默认值为false）
    affix: true                  if set true, the tag will affix in the tags-view
                                 如果设置为真，则标签将粘贴在“标签”视图中。
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
                                 如果设置为false，该项将隐藏在breadcrumb中（默认值为true）
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
                                 如果设置路径，侧边栏将突出显示您设置的路径。
  }
 */

const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/newsong',
    children: [{
      path: '/newsong',
      component: () => import('@/views/newsong/index'),
      name: 'newsong',
      meta: {
        title: '新歌',
        isNavbar: true
      }
    }]
  },
  {
    path: '/rank',
    component: Layout,
    redirect: '/rank/index',
    children: [
      {
        path: '/rank',
        component: () => import('@/views/rank/index'),
        name: 'Rank',
        meta: {
          title: '排行',
          isNavbar: true
        }
      },
      {
        path: '/rank/info',
        component: () => import('@/views/rank/rank-info'),
        name: 'RankInfo',
        meta: {
          title: '排行分类',
          isTitle: true
        }
      }
    ]
  },
  {
    path: '/plist',
    component: Layout,
    redirect: '/plist/index',
    children: [
      {
        path: '/plist',
        component: () => import('@/views/plist/index'),
        name: 'plist',
        meta: {
          title: '歌单',
          isNavbar: true
        }
      },
      {
        path: '/plist/info',
        component: () => import('@/views/plist/plist-info'),
        name: 'PlistInfo',
        meta: {
          title: '歌单详情',
          isTitle: true
        }
      }
    ]
  },
  {
    path: '/singer',
    component: Layout,
    redirect: '/singer/index',
    children: [
      {
        path: '/singer',
        component: () => import('@/views/singer/index'),
        name: 'Singer',
        meta: {
          title: '歌手',
          isNavbar: true
        }
      },
      {
        path: '/singer/info',
        component: () => import('@/views/singer/singer-info'),
        name: 'SingerInfo',
        meta: {}
      },
      {
        path: '/singer/info/list',
        component: () => import('@/views/singer/singer-info-list'),
        name: 'SingerInfoList',
        meta: {}
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
