<template>
  <v-container>
    <v-dialog
        max-width="290"
        v-model="slotMachineTurnedOn"
        transition="false"
    >
      <SlotMachineAnimation/>
    </v-dialog>
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
        :bigger-scale="!getActivePerson && !getActiveClock"
    />
  </v-container>
</template>

<script>
import {actions as spinnerActions, getters as spinnerGetters} from '@/store/modules/spinner/spinner.module';
import {getters as configGetters} from '@/store/modules/configuration/configuration.module';
import {DailyCourse} from "@/model/spinner/DailyCourse.model";
import OperativeButtonsRow from "@/components/spinner/OperativeButtonsRow";
import SlotMachineAnimation from "@/components/spinner/SlotMachineAnimation";
import SpeakerPanel from "@/components/spinner/SpeakerPanel";
import HistoryContainer from "@/components/spinner/HistoryContainer";

export default {
  name: "Spinner",
  components: {HistoryContainer, SpeakerPanel, SlotMachineAnimation, OperativeButtonsRow},
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
  //todo w widoku spinnera: fix tapety, dodanie modalu animacji na nast. osoby, animacje kartek, testy na tel.
  methods: {
    startDaily() {
      this.turnOnDrawingAnimation()
      setTimeout(() => {
        this.turnOffDrawingAnimation()
        spinnerActions.startDaily(new DailyCourse(this.getConfig))
      }, 5000)
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

</style>