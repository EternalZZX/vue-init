import Vue from 'vue';
import Router from 'vue-router';
import EtHeader from '@/components/header';
import EtFooter from '@/components/footer';

Vue.use(Router);

const frameCompontent = {
  template: `
  <div class="et-frame">
      <et-header></et-header>
      <div class="et-main">
        <router-view/>
      </div>
      <et-footer></et-footer>
  </div>`,
  name: 'EtRouter',
  components: {
    EtHeader,
    EtFooter
  }
};

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: frameCompontent,
    children: [{
      path: '/',
      alias: '/index',
      name: 'index',
      component: () => import('@/components/index')
    }]
  }]
})
