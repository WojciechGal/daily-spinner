<template>
  <v-container>
    <Modal v-if="slotMachineTurnedOn">
      <SlotMachineAnimation slot="animation"/>
    </Modal>
    <div>
      SPINNER
      <div>
        Daily now: {{getDailyCourse}}
      </div>
      <!--      <div>-->
      <!--        <button class="test-button" @click="startDaily">START DAILY</button>-->
      <!--        <button class="test-button" @click="nextPerson">NEXT PERSON </button>-->
      <!--        <button class="test-button" @click="finishDaily">/ FINISH </button>-->
      <!--      </div>-->
      <div>
        current person: {{getActivePerson}}
        time: {{getActiveClock}}
      </div>
    </div>
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

export default {
  name: "Spinner",
  components: {SpeakerPanel, SlotMachineAnimation, Modal, OperativeButtonsRow},
  data() {
    return {
      slotMachineTurnedOn: false
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
      this.turnOnDrawingAnimation()
      setTimeout(() => {
        this.turnOffDrawingAnimation()
        spinnerActions.startDaily(new DailyCourse(this.getConfig))
      }, 4800)
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
    },
    turnOnDrawingAnimation() {
      this.slotMachineTurnedOn = true
    },
    turnOffDrawingAnimation() {
      this.slotMachineTurnedOn = false
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