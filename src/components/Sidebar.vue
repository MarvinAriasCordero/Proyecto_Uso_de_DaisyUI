<template>
  <aside class="w-64 bg-base-200 text-base-content min-h-screen p-4 flex flex-col shadow-lg z-20">
    <h2 class="text-xl font-bold mb-4 text-primary">Proyectos</h2>
    <p class="text-sm text-neutral-content mb-6">No hay proyectos</p>

    <ul class="menu bg-base-200 w-full rounded-box flex-grow">
      <li>
        <a class="active">
          Item 1
          <span class="badge badge-sm badge-ghost ml-auto">2</span>
        </a>
      </li>
      <li>
        <details open>
          <summary>Parent</summary>
          <ul>
            <li><a>Submenu para el 1</a></li>
            <li><a>Submenu para el 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul>
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>

    <div class="mt-auto flex justify-around p-2 border-t border-base-content border-opacity-20">
     

      <button className="btn btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>

    </div>
  </aside>
</template>

<script setup>
// No necesita lógica en este momento
</script>

<style scoped>
/* Estilos específicos para Sidebar si son necesarios */
</style>