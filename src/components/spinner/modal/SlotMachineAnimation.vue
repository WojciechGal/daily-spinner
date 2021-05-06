<template>
    <div id="window" class="animation-window">
      <img id="gif" src="@/assets/gif/slot-machine.gif" alt="404 :(">
    </div>
</template>

<script>
export default {
  name: "SlotMachineAnimation",
  mounted() {
    //mobile workaround for restarting gifs
    const img = document.getElementById("gif");
    img.style = "display: none;";
    img.style = "display: block;";
    setTimeout(() => {
      // eslint-disable-next-line no-self-assign
      img.src = img.src;
    }, 0);
  }
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