<template>
  <div class="modal-fader">
    <slot name="animation"/>
  </div>
</template>

<script>
export default {
  name: "Modal"
}
</script>

<style scoped>

.modal-fader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  animation: slideIn;
  animation-duration: 0.3s;
}

@keyframes slideIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>