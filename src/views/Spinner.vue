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
import {getters as spinnerGetters, actions as spinnerActions} from '@/store/modules/spinner/spinner.module';
import {getters as configGetters} from '@/store/modules/configuration/configuration.module';
import {DailyCourse} from "@/model/spinner/DailyCourse.model";

export default {
  name: "Spinner",
  data() {
    return {

    }
  },
  computed: {
    getDailyCourse() {
      return spinnerGetters.dailyCourse()
    },
    getConfig() {
      return configGetters.configuration()
    },
    getActivePerson() {
      return spinnerGetters.activePerson()
    },
    getActiveClock() {
      return spinnerGetters.activeClock()
    }
  },
  methods: {
    startDaily() {
      spinnerActions.startDaily(new DailyCourse(this.getConfig))
    },
    nextPerson() {
      spinnerActions.nextPerson()
    },
    finishDaily() {
      spinnerActions.finishDaily()
    },
    giveYellowCard() {
      spinnerActions.giveYellowCard()
    },
    giveRedCard() {
      spinnerActions.giveRedCard()
    }
  },
  watch: {
    getActiveClock: {
      deep: true,
      immediate: true,
      handler: function (clock) {
        if (clock !== null && clock?.timeElapsed === (clock?.timeGiven / 2)) {
          this.giveYellowCard()
        } else if (clock !== null && clock?.timeElapsed === clock?.timeGiven) {
          this.giveRedCard()
        }
      }
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