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
}

</style>