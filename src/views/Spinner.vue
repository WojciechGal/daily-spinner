<template>
  <v-container>
    <Modal v-if="modalOn" :timeout="modalTimeout" @modal-closed="executeAction">
      <SlotMachineAnimation v-if="modalContent === 'slot-machine'" slot="content"/>
      <Card v-else :card-type="modalContent" slot="content"/>
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
import Card from "@/components/spinner/Card";

export default {
  name: "Spinner",
  components: {Card, HistoryContainer, SpeakerPanel, Modal, SlotMachineAnimation, OperativeButtonsRow},
  data() {
    return {
      modalOn: false,
      modalTimeout: Number,
      modalContent: '',
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
      this.modalContent = 'yellow-card'
      this.modalTimeout = 2500
      this.modalOn = true
    },
    giveRedCard() {
      spinnerActions.giveRedCard()
      this.modalContent = 'red-card'
      this.modalTimeout = 2500
      this.modalOn = true
    },
    turnOnSlotAnimation(timeout) {
      this.modalContent = 'slot-machine'
      this.modalTimeout = timeout
      this.modalOn = true
    },
    executeAction() {
      this.modalOn = false
      if (this.modalContent === 'slot-machine') {
        this.currentAction()
      }
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