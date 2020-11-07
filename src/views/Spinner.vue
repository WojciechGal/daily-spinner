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
import {getters as dailyCourseGetters, actions as dailyCourseActions} from '@/store/modules/daily/dailyCourse.module';
import {getters as configGetters} from '@/store/modules/configuration/configuration.module';
import {DailyCourse} from "@/model/daily/DailyCourse.model";

export default {
  name: "Spinner",
  data() {
    return {

    }
  },
  computed: {
    getDailyCourse() {
      return dailyCourseGetters.dailyCourse()
    },
    getConfig() {
      return configGetters.configuration()
    },
    getActivePerson() {
      return dailyCourseGetters.activePerson()
    },
    getActiveClock() {
      return dailyCourseGetters.activeClock()
    }
  },
  methods: {
    startDaily() {
      dailyCourseActions.startDaily(new DailyCourse(this.getConfig))
    },
    nextPerson() {
      dailyCourseActions.nextPerson()
    },
    finishDaily() {
      dailyCourseActions.finishDaily()
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