<template>
    <div class="animation-window">
      <img src="../../assets/gif/slot-machine.gif" alt="404 :(">
    </div>
</template>

<script>
export default {
  name: "SlotMachineAnimation"
}
</script>

<style scoped>

.animation-window {
  position: fixed;
  width: 480px;
  height: 270px;
  top: 50%;
  left: 50%;
  margin-top: -135px; /* Negative half of height. */
  margin-left: -240px; /* Negative half of width. */
}

</style>