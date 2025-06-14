<template>
  <div class="flex h-screen bg-base-300 text-base-content" data-theme="dark">
    <Sidebar :projects="projects" />

    <div class="flex-1 flex flex-col">
      <Header />

      <main class="flex-1 p-4 overflow-y-auto">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';

// --- El array 'projects' ahora DEBE ser gestionado por ProyectsView ---
// Si lo dejas aquí, será una copia diferente de la que usa ProyectsView.
// Si deseas que Sidebar muestre los proyectos persistentes, hay dos opciones:
// 1. Sidebar también lee de localStorage.
// 2. Usar Pinia/Vuex para un estado global.

// ** OPCIÓN MÁS SENCILLA AHORA: QUE Sidebar lea también de localStorage **
// Esto crea cierta redundancia pero es lo más rápido sin Pinia/Vuex.
// Por ahora, déjalo así y lo actualizaremos en Sidebar.vue.

// Puedes eliminar esto de Layout.vue:
// const projects = ref([ ... ]);
// const addProject = () => { ... };
// const removeProject = () => { ... };

// Mantenemos la declaración de projects para poder pasárselo a Sidebar,
// pero su valor real y persistente lo gestionará ProyectsView via localStorage.
// Esto es temporal y se resolverá en el siguiente paso (Sidebar).
const projects = ref([]); // O un array vacío, ya que ProyectsView será la fuente.

</script>

<style scoped>
/* Estilos específicos para Layout si son necesarios */
</style>