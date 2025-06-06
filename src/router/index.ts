
import { createRouter, createWebHistory } from 'vue-router';




import Layout from '@/components/Layout.vue';
import ProyectsView from '@/views/ProyectsView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: ProyectsView,
        },
        {
          path: 'proyectos',
          name: 'proyectos',
          component: ProyectsView,
        },
      ],
    },
    // ... otras rutas si las tienes
  ],
});

export default router;