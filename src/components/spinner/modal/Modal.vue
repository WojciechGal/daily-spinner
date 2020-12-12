<template>
  <div
      class="modal-fader"
      :class="{faderIn: !closeModal, faderOut: closeModal}"
  >
    <slot name="content"/>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      closeModal: false
    }
  },
  props: {
    timeout: {
      type: Number,
      required: false,
      default: () => -1
    }
  },
  methods: {
    emitModalClosed() {
      this.$emit('modal-closed')
    }
  },
  mounted() {
    //animations in and out are going on for 0.5s, so the timeout should be at least 1s
    if (this.timeout > 1000) {
      setTimeout(() => {
        this.closeModal = true
      }, this.timeout - 500)
      setTimeout(() => {
        this.emitModalClosed()
      }, this.timeout)
    }
  }
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
}

.faderIn {
  animation: slide-in;
  animation-duration: 0.5s;
}

@keyframes slide-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.faderOut {
  animation: slide-out;
  animation-duration: 0.5s;
}

@keyframes slide-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

</style>