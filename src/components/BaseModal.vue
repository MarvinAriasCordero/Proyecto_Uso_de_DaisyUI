<template>
  <dialog :id="modalId" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">
        <slot name="title">Título por defecto del Modal</slot>
      </h3>

      <p class="py-4">
        <slot name="body">Contenido por defecto del modal. Puedes poner aquí tus formularios o textos.</slot>
      </p>

      <div class="modal-action">
        <slot name="actions">
          <form method="dialog">
            <button class="btn">Cerrar</button>
          </form>
        </slot>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { defineProps } from 'vue';

// Define los props que este componente puede recibir
const props = defineProps({
  modalId: {
    type: String,
    required: true, // El ID es necesario para que funcione la apertura/cierre
    default: 'default_modal_id' // Un valor por defecto para evitar errores si se olvida
  }
});

// La función para abrir el modal, que será expuesta para que el padre la pueda llamar
const openModal = () => {
  const modalElement = document.getElementById(props.modalId);
  if (modalElement) {
    modalElement.showModal();
  }
};

// Exponemos la función openModal para que el componente padre pueda llamarla
defineExpose({
  openModal
});
</script>

<style scoped>
/* Puedes añadir estilos específicos del modal si no están cubiertos por DaisyUI */
</style>