import Vue from 'vue'
import Router from 'vue-router'
import chooseUser from '@/views/chooseUser'
import admin from '@/views/admin'
import login from '@/views/login'
import queue from '@/views/queue'
import docview from '@/views/docview'
import waitingqueue1 from '@/views/waitingqueue1'
import waitingqueue2 from '@/views/waitingqueue2'
import waitingqueue3 from '@/views/waitingqueue3'
import docviewdetail1 from '@/views/docviewdetail1'
import docviewdetail2 from '@/views/docviewdetail2'
import docviewdetail3 from '@/views/docviewdetail3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chooseUser',
      component: chooseUser
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/queue',
      name: 'queue',
      component: queue
    },
    {
      path: '/docview',
      name: 'docview',
      component: docview
    },
    {
      path: '/waitingqueue1',
      name: 'waitingqueue1',
      component: waitingqueue1
    },
    {
      path: '/waitingqueue2',
      name: 'waitingqueue2',
      component: waitingqueue2
    },
    {
      path: '/waitingqueue3',
      name: 'waitingqueue3',
      component: waitingqueue3
    },
    {
      path: '/docviewdetail1',
      name: 'docviewdetail1',
      component: docviewdetail1
    },
    {
      path: '/docviewdetail2',
      name: 'docviewdetail2',
      component: docviewdetail2
    },
    {
      path: '/docviewdetail3',
      name: 'docviewdetail3',
      component: docviewdetail3
    },
  ]
})
