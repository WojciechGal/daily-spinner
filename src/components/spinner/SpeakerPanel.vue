<template>
  <v-row justify="center">
    <v-card
      color="red"
      width="500"
    >
      <div>
        Now speaks: {{speaker.name}}
      </div>
      <div>
        <Clock :seconds-left="clock.timeLeft"/>
      </div>
    </v-card>
  </v-row>
</template>

<script>

import Clock from "@/components/spinner/Clock";
export default {
  name: "SpeakerPanel",
  components: {Clock},
  data() {
    return {
      currentDeadline: null
    }
  },
  props: {
    speaker: {
      type: Object,
      required: true
    },
    clock: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>



</style>