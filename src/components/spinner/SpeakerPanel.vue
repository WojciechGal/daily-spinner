<template>
  <v-card
      color="red"
      width="500"
      class="ma-3"
  >
    <v-row>
      <v-col>
        <p class="speaker">
          Now speaks:
          <span class="person-name-span">
              {{ speaker.name }}
            </span>
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Clock :seconds-left="clock.timeLeft"/>
      </v-col>
    </v-row>
  </v-card>
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

.speaker {
  letter-spacing: 0.03em;
  font-size: 30px;
  margin-bottom: 0;
}

.person-name-span {
  font-weight: bold;
}

</style>