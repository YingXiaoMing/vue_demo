import Vue from 'vue'
import Router from 'vue-router'
import qsData from '@/components/QS_data'
import qsList from '@/components/QS_list'
import qsFill from '@/components/QS_fill'
import qsEdit from '@/components/QS_edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'qsList',
      component: qsList
    }
  ]
})
