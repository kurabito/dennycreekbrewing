import {
  createRouter,
  createWebHistory
} from 'vue-router/dist/vue-router.esm-bundler';
import Home from './components/Home.vue';
import BrewLogs from './components/BrewLogs.vue';
import Labels from './components/Labels.vue';
import Competitions from './components/Competitions.vue';
import Resources from './components/Resources.vue';

export default () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/logs',
        name: 'Brew Logs',
        component: BrewLogs
      },
      {
        path: '/labels',
        name: 'Labels',
        component: Labels
      },
      {
        path: '/competitions',
        name: 'Competitions',
        component: Competitions
      },
      {
        path: '/resources',
        name: 'Redources',
        component: Resources
      },
    ]
  });
