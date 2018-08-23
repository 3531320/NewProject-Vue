import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/List' // 引入写的组件
import UserDetails from '@/components/UserDetails' // 引入写的组件
import Layout from '@/components/HelloWorld' // 引入写的组件 Layout布局
import Button from '@/components/Element' // 引入写的组件
import Select from '@/components/Select' // 引入写的组件
import Upload from '@/components/Upload' // 引入写的组件
import NavMenu from '@/components/NavMenu' // 引入写的组件
import Vue1 from '@/components/Vue' // 引入写的组件
import Vue2 from '@/components/Vue1' // 引入写的组件
import NewList from '@/components/NewList' // 引入写的组件

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: UserList
  },
    {
      path: "/details",
      component: UserDetails
    },
    {
      path: "/he",
      component: Layout
    },
    {
      path: "/button",
      component: Button
    },
    {
      path: "/select",
      component: Select
    },
    {
      path: "/upload",
      component: Upload
    },
    {
      path: "/NavMenu",
      component: NavMenu
    },
    {
      path:'/text',
      component:Vue1
    },
    {
      path:'/text1',
      component:Vue2
    },
    {
      path:"/new",
      component:NewList
    }
  ]
})
