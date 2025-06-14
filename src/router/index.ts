// src/router/index.ts
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
          path: '', // Ruta por defecto dentro del Layout
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
  ],
});

export default router;