<template>
  <div class="background">
    <div class="roof shadow"></div>
    <div class="cover shadow">
      <div class="clock">
        <p class="time">{{getFormattedTimeLeft}}</p>
      </div>
    </div>
    <div class="legs-container">
      <div class="leg-1 shadow"></div>
      <div class="leg-2 shadow"></div>
    </div>
  </div>
</template>

<script>
import convertSecToMin from "@/utils/spinner/time.utils";

export default {
  name: "Clock",
  props: {
    secondsLeft: {
      type: Number,
      required: true
    }
  },
  computed: {
    getFormattedTimeLeft() {
      return convertSecToMin(this.secondsLeft)
    }
  }
}
</script>

<style scoped>

.background {
  width: 300px;
  position: relative;
  margin: 15px auto;
}

.roof {
  margin-left: auto;
  margin-right: auto;
  background-color: #4c4545;
  width: 200px;
  height: 10px;
  border-radius: 10px 10px 0 0;
}

.cover {
  background-color: #000000;
  border-radius: 20px;
}

.clock {
  font-family: monaco,serif;
  color: #ffffff;
  text-shadow: 0 0 25px #0acce6, 0 0 25px rgba(10, 175, 230, 0);
}

.time {
  letter-spacing: 0.06em;
  font-size: 80px;
  margin-bottom: 0;
}

.legs-container {
  display: flex;
}

.leg-1 {
  background-color: #4c4545;
  width: 40px;
  height: 15px;
  border-radius: 0 0 10px 10px;
  margin-left: 25px;
  margin-right: auto;
}

.leg-2 {
  background-color: #4c4545;
  width: 40px;
  height: 15px;
  border-radius: 0 0 10px 10px;
  margin-left: auto;
  margin-right: 25px;
}

.shadow {
  -webkit-box-shadow: 2px 2px 4px #2f2f2f;
  -moz-box-shadow:    2px 2px 4px #2f2f2f;
  box-shadow:         2px 2px 4px #2f2f2f;
}

</style>