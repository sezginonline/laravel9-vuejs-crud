import './bootstrap';

import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import Index from './pages/Index.vue';
import Form from './pages/Form.vue';
import App from './pages/App.vue';

const app = createApp(App);

const routes = [
    { path: '/', component: Index },
    { path: '/form', component: Form },
    { path: '/form/:id', component: Form },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(router);

app.mount('#app');