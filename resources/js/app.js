import './bootstrap';

import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import Index from './pages/Index.vue';
import Form from './pages/Form.vue';
import App from './pages/App.vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);

const routes = [
    { path: '/', name: 'home', component: Index },
    { path: '/form', component: Form },
    { path: '/form/:id', component: Form },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(router);
app.use(VueSweetalert2);

app.mount('#app');