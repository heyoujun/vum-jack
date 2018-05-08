import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout'
import manageLayout from '../views/manage/layout/Layout'
import stuffLayout from '../views/stuff/layout/Layout'
Vue.use(Router)


/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will not redirct in the levelbar
* noDropdown : if `noDropdown:true` will not has submenu in the sidebar
* meta : `{ role: ['admin'] }`  will control the page role
**/
export const constantRouterMap = [
  { path: '/', component: _import('manage/publicLogin'), hidden: true },
  { path: '/login', component: _import('manage/login'), hidden: true },
  { path: '/stufflogin', component: _import('stuff/login'), hidden: true },
  // { path: '/404', component: _import('404'), hidden: true },











  /*材料商平台路由配置（start）*/
  {
    path: '/stuffManage',
    component: stuffLayout,
    icon: 'zujian.svg',
    noDropdown: true,
    children: [
      {
        path:'/home',
        name: '首页',
        icon: 'zujian.svg',
        component: _import('stuff/home'),
        noDropdown: true
      },
      {
        path: '/stuffMeasure',
        component: _import('stuff/stuffMeasure'),
        icon: 'menu-icon-6',
        name: '测量单管理',
        noDropdown: true
      },
      {
        path:'/stuffOrder',
        name: '订单管理',
        icon: 'menu-icon-5',
        component: _import('stuff/stuffOrder'),
        noDropdown: true,
        children: [
          {
            path: '/stuffOrderMore',
            component: _import('stuff/stuffOrderMore'),
            name: '订单详情',
            icon: ''
          }

        ]
      },

      {
        path: '',
        icon: 'menu-icon-2',
        name:'报表统计',
        noDropdown: false,
        hidden:false,
        children: [
          {
            path:'/stuffMeasureStatistics',
            name: '测量单统计',
            icon: '',
            component: _import('manage/measureStatistics')
          },
          {
            path:'/stuffOrderStatistics',
            name: '订单统计',
            icon: '',
            component: _import('manage/orderStatistics')
          }
        ]
      },

      {
        path: '/stuffUser',
        component: _import('stuff/stuffUser'),
        name: '账户管理',
        icon: 'menu-icon-9',
        noDropdown: true
      },
      {
        path: '',
        icon: 'menu-icon-2',
        name:'结算管理',
        noDropdown: false,
        children: [
          {
            path:'/stuffAwaitSettlement',
            name: '待结算',
            icon: '',
            component: _import('manage/settlementManage')
          },
          {
            path:'/stuffSettlementOver',
            name: '已完结',
            icon: '',
            component: _import('manage/settlementManage')
          }
        ]
      },
      {
        path: '/stuffPrintPdf',
        component: _import('admin/print'),
        icon: '',
        name: '订单PDF预览',
        hidden:true
      }
    ]
  }

  /*材料商平台路由配置（end）*/











  //
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'Example',
  //   icon: 'zujian',
  //   children: [
  //     { path: 'index', name: 'Form', icon: 'zonghe', component: _import('page/form') }
  //   ]
  // },
  //
  // {
  //   path: '/table',
  //   component: Layout,
  //   redirect: '/table/index',
  //   icon: 'tubiao',
  //   noDropdown: true,
  //   children: [{ path: 'index', name: 'Table', component: _import('table/index'), meta: { role: ['admin'] }}]
  // },
  //
  // { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

