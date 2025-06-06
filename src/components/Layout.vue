<template>
  <div class="flex h-screen bg-base-300 text-base-content" data-theme="dark">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <Header />

      <main class="flex-1 p-4 overflow-y-auto">
        <RouterView>  </RouterView>
      
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped>
/* Estilos específicos para Layout si son necesarios */
</style>