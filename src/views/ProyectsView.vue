<template>
  <div class="p-4 bg-base-100 rounded-box shadow-xl min-h-[calc(100vh-120px)] flex flex-col">
    <h2 class="text-2xl font-bold mb-4 text-base-content">Proyectos</h2>
    <div class="overflow-x-auto flex-grow">
      <table class="table w-full table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Proyecto</th>
            <th>Tareas</th>
            <th>Avance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Hart-Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>
              <div class="badge badge-primary">Purple</div>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>Otro Proyecto S.A.</td>
            <td>Desarrollador Full Stack</td>
            <td>
              <div class="badge badge-secondary">In Progress</div>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>Innovación Tech</td>
            <td>UI/UX Designer</td>
            <td>
              <div class="badge badge-accent">Completed</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <button
      class="btn btn-circle btn-lg btn-secondary shadow-lg fixed z-50"
      :style="buttonStyle"
      @click="openModal"
      @mousedown="startDrag"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>

    <div class="flex justify-center p-4">
      <button class="btn btn-primary" @click="modal2Ref.openModal()">
        Contenido
      </button>
    </div>

    <BaseModal modalId="my_modal_1" ref="modal1Ref">
      <template #title>
        {{ commonModalTitle }}
      </template>
      <template #body>
        {{ commonModalBody }}
      </template>
      <template #actions>
        <form method="dialog">
          <button class="btn btn-error">Cancelar</button>
          <button class="btn btn-success ml-2">Guardar</button>
        </form>
      </template>
    </BaseModal>

    <BaseModal modalId="my_modal_2" ref="modal2Ref">
      <template #title>
        {{ commonModalTitle }}
      </template>
      <template #body>
        {{ commonModalBody }}
      </template>
      <template #actions>
        <form method="dialog">
          <button class="btn btn-info">Cerrar Modal 2</button>
        </form>
      </template>
    </BaseModal>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed } from 'vue';
import BaseModal from '../components/BaseModal.vue';

// --- Contenido común para los modales ---
const commonModalTitle = '¡Hola! Este es el Contenido Principal (Compartido)';
const commonModalBody = 'Jeison y Jeferson son los gays que existen!!! Y jose no se escapa tambien el patas de Ganso!';

const modal1Ref = ref(null);
const modal2Ref = ref(null);

const openModal = () => {
  if (modal1Ref.value) {
    modal1Ref.value.openModal();
  }
};

// --- Lógica para arrastrar el botón (SIN CAMBIOS RESPECTO A LA VERSIÓN ANTERIOR) ---
const isDragging = ref(false);
const startX = ref(0);
const startY = ref(0);
const initialButtonX = ref(window.innerWidth - 100);
const initialButtonY = ref(window.innerHeight - 100);

const buttonStyle = computed(() => ({
  top: `${initialButtonY.value}px`,
  left: `${initialButtonX.value}px`,
}));

const startDrag = (e) => {
  if (e.button !== 0) return;

  isDragging.value = true;
  startX.value = e.clientX;
  startY.value = e.clientY;

  e.stopPropagation(); // Evitar clic al iniciar arrastre

  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDrag);
};

const drag = (e) => {
  if (!isDragging.value) return;

  const dx = e.clientX - startX.value;
  const dy = e.clientY - startY.value;

  initialButtonX.value += dx;
  initialButtonY.value += dy;

  startX.value = e.clientX;
  startY.value = e.clientY;

  const buttonWidth = 64; // Ejemplo: btn-lg es aprox 64px
  const buttonHeight = 64; // Ejemplo: btn-lg es aprox 64px

  if (initialButtonX.value < 0) initialButtonX.value = 0;
  if (initialButtonY.value < 0) initialButtonY.value = 0;
  if (initialButtonX.value > window.innerWidth - buttonWidth) initialButtonX.value = window.innerWidth - buttonWidth;
  if (initialButtonY.value > window.innerHeight - buttonHeight) initialButtonY.value = window.innerHeight - buttonHeight;
};

const stopDrag = () => {
  isDragging.value = false;
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
};

onUnmounted(() => {
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
});

onMounted(() => {
  // Ajustar la posición inicial al tamaño de la ventana al montar, si lo deseas
});
</script>

<style scoped>
/* Estilos específicos para ProyectsView si son necesarios */
</style>