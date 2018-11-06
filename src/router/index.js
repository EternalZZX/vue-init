import Vue from 'vue';
import Router from 'vue-router';
import WkHeader from '@/components/header';
import WkFooter from '@/components/footer';

Vue.use(Router);

const frameCompontent = {
  template: `
  <div class="wk-wukong">
      <wk-header></wk-header>
      <div class="wk-main">
        <router-view/>
      </div>
      <wk-footer></wk-footer>
  </div>`,
  name: 'EtRouter',
  components: {
    WkHeader,
    WkFooter
  }
};

export default new Router({
  mode: 'history',
  routes: [{
    path: '/login',
    name: 'login',
    component: () => import('@/components/login')
  }, {
    path: '/',
    component: frameCompontent,
    children: [{
      path: '/',
      alias: '/list',
      name: 'list',
      component: () => import('@/components/list')
    }, {
      path: '/report',
      name: 'report',
      component: () => import('@/components/report')
    }, {
      path: '/report/detail',
      name: 'detail',
      component: () => import('@/components/detail')
    }, {
      path: '/report/code',
      name: 'code',
      component: () => import('@/components/code')
    }]
  }]
})
