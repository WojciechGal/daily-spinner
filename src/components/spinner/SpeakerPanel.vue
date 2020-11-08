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
        <div id="clock">
          <p class="time">{{clock.timeLeft}}</p>
        </div>
      </div>
    </v-card>
  </v-row>
</template>

<script>

export default {
  name: "SpeakerPanel",
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

p {
  margin: 0;
  padding: 0;
}

#clock {
  font-family: monaco;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
}
#clock .time {
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
}

</style>