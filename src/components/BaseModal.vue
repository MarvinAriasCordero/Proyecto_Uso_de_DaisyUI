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
import { defineProps, defineExpose } from 'vue';

const props = defineProps({
  modalId: {
    type: String,
    required: true,
    default: 'default_modal_id'
  }
});

const openModal = () => {
  const modalElement = document.getElementById(props.modalId);
  if (modalElement) {
    modalElement.showModal();
  }
};

const close = () => { // Función para cerrar el modal programáticamente
  const modalElement = document.getElementById(props.modalId);
  if (modalElement) {
    modalElement.close();
  }
};

defineExpose({
  openModal,
  close // <-- Asegúrate de que 'close' está aquí
});
</script>

<style scoped>
/* Puedes añadir estilos específicos del modal si no están cubiertos por DaisyUI */
</style>