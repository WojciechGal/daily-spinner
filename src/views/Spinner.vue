<template>
  <div>
    SPINNER
    <div>
      Daily now: {{getDailyCourse}}
    </div>
    <div>
      <button class="test-button" @click="startDaily">START DAILY</button>
      <button class="test-button" @click="nextPerson">NEXT PERSON </button>
      <button class="test-button" @click="finishDaily">/ FINISH </button>
    </div>
    <div>
      current person: {{getActivePerson}}
      time: {{getActiveClock}}
    </div>
  </div>
</template>

<script>
import {
  actions,
  getters
} from '@/store/modules/daily.module';
import {getters as configGetters} from '@/store/modules/configuration.module';
import {DailyCourse} from "@/model/daily/DailyCourse.model";

export default {
  name: "Spinner",
  data() {
    return {

    }
  },
  computed: {
    getDailyCourse() {
      return getters.daily()
    },
    getConfig() {
      return configGetters.configuration()
    },
    getActivePerson() {
      return getters.activePerson()
    },
    getActiveClock() {
      return getters.activeClock()
    }
  },
  methods: {
    startDaily() {
      actions.startDaily(new DailyCourse(this.getConfig))
    },
    nextPerson() {
      actions.nextPerson()
    },
    finishDaily() {
      actions.finishDaily()
    }
  }
}
</script>

<style scoped>
  .test-button {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }
</style>