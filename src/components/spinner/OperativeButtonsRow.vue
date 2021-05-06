<template>
  <v-row justify="center">
    <v-btn
        v-if="!getDailyCourse || getDailyCourse.notFinishedPeople.length === 0"
        class="ma-3"
        color="success"
        @click="startDaily"
    >
      Start the Daily
    </v-btn>
    <v-btn
        v-else-if="getDailyCourse && getDailyCourse.notFinishedPeople.length > 1"
        class="ma-3"
        color="warning"
        @click="nextPerson"
    >
      Draw next Person
    </v-btn>
    <v-btn
        v-if="getDailyCourse && getDailyCourse.notFinishedPeople.length === 1"
        class="ma-3"
        color="error"
        @click="finishDaily"
    >
      Finish the Daily
    </v-btn>
  </v-row>
</template>

<script>
import {getters as configGetters} from "@/store/modules/configuration/configuration.module";
import {actions as spinnerActions, getters as spinnerGetters} from '@/store/modules/spinner/spinner.module';
import {DailyCourse} from "@/model/spinner/DailyCourse.model";

export default {
  name: "ButtonsRow",
  data() {
    return {
      currentAction: Function
    }
  },
  computed: {
    getConfig() {
      return configGetters.configuration()
    },
    getDailyCourse() {
      return spinnerGetters.dailyCourse()
    }
  },
  methods: {
    startDaily() {
      const currentConfig = this.getConfig
      this.currentAction = () => spinnerActions.startDaily(new DailyCourse(currentConfig))
      this.$emit('set-up-modal', 'slot-machine', 4900)
    },
    nextPerson() {
      spinnerActions.stopClock()
      this.currentAction = () => spinnerActions.nextPerson()
      this.$emit('set-up-modal', 'slot-machine', 4900)
    },
    finishDaily() {
      spinnerActions.finishDaily()
    },
    executeCurrentAction() {
      this.currentAction()
    }
  }
}
</script>

<style scoped>

</style>