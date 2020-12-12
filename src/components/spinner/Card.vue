<template>
  <div class="card-window">
    <img v-if="cardType === 'yellow-card'" src="@/assets/png/referee_yellow.png" alt="404 :(">
    <img v-else-if="cardType === 'red-card'" src="@/assets/png/referee_red.png" alt="404 :(">
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardType: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.playWhistleAudio()
  },
  methods: {
    playWhistleAudio() {
      const whistleAudio = new Audio(require('@/assets/sound/whistle.wav'))
      whistleAudio.play();
    }
  }
}
</script>

<style scoped>

.card-window {
  position: fixed;
  width: 550px;
  height: 80%;
  top: 20%;
  left: 50%;
  margin-left: -240px; /* Negative half of width. */
}

img {
  max-height: 100%;
  max-width: 100%;
}

</style>