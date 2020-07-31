import Vue from 'vue'
import Router from 'vue-router'


import MainPage from '~/components/main/MainPage'
import RulesPage from '~/components/main/RulesPage'
import ApplyPage from '~/components/main/ApplyPage'
import InstructionPage from '~/components/main/InstructionPage'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/правила',
            component: RulesPage
        },
        {
            path: '/соглашение',
            component: ApplyPage
        },
        {
            path: '/инструкция',
            component: InstructionPage
        }
    ]
  })
}