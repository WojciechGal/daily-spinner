<template>
  <v-container>
    <Modal v-if="modalWithAnimationOn" :timeout="modalTimeout" @modal-closed="executeAction">
      <SlotMachineAnimation v-if="modalAnimationType === 'slot-machine'" slot="animation"/>
    </Modal>
    <OperativeButtonsRow
        :daily-course="getDailyCourse"
        @start-daily="startDaily"
        @next-person="nextPerson"
        @finish-daily="finishDaily"
    />
    <SpeakerPanel
        v-if="getActivePerson && getActiveClock"
        :speaker="getActivePerson"
        :clock="getActiveClock"
    />
    <HistoryContainer
        v-if="getDailyCourse && getDailyCourse.finishedPeople.length"
        :finished-people="getDailyCourse.finishedPeople"
    />
  </v-container>
</template>

<script>
import {actions as spinnerActions, getters as spinnerGetters} from '@/store/modules/spinner/spinner.module';
import {getters as configGetters} from '@/store/modules/configuration/configuration.module';
import {DailyCourse} from "@/model/spinner/DailyCourse.model";
import OperativeButtonsRow from "@/components/spinner/OperativeButtonsRow";
import Modal from "@/components/spinner/Modal";
import SlotMachineAnimation from "@/components/spinner/SlotMachineAnimation";
import SpeakerPanel from "@/components/spinner/SpeakerPanel";
import HistoryContainer from "@/components/spinner/HistoryContainer";

export default {
  name: "Spinner",
  components: {HistoryContainer, SpeakerPanel, Modal, SlotMachineAnimation, OperativeButtonsRow},
  data() {
    return {
      modalWithAnimationOn: false,
      modalTimeout: Number,
      modalAnimationType: '',
      currentAction: Function
    }
  },
  computed: {
    getConfig() {
      return configGetters.configuration()
    },
    getDailyCourse() {
      return spinnerGetters.dailyCourse()
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
      const currentConfig = this.getConfig
      this.currentAction = () => spinnerActions.startDaily(new DailyCourse(currentConfig))
      this.turnOnSlotAnimation(4900)
    },
    nextPerson() {
      spinnerActions.stopClock()
      this.currentAction = () => spinnerActions.nextPerson()
      this.turnOnSlotAnimation(4900)
    },
    finishDaily() {
      spinnerActions.finishDaily()
    },
    giveYellowCard() {
      spinnerActions.giveYellowCard()
    },
    giveRedCard() {
      spinnerActions.giveRedCard()
    },
    turnOnSlotAnimation(timeout) {
      this.modalAnimationType = 'slot-machine'
      this.modalTimeout = timeout
      this.modalWithAnimationOn = true
    },
    executeAction() {
      this.modalWithAnimationOn = false
      this.currentAction()
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

</style>