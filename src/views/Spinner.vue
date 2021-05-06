<template>
  <v-container>
    <Modal
        v-if="modalOn"
        :timeout="modalTimeout"
        @modal-closed="handleModalClosure"
    >
      <SlotMachineAnimation
          v-if="modalContent === 'slot-machine'"
          slot="content"
      />
      <Card
          v-else
          :card-type="modalContent"
          slot="content"
      />
    </Modal>
    <OperativeButtonsRow
        ref="operativeButtons"
        @set-up-modal="setUpModal"
    />
    <transition-group
        name="panel"
        @before-leave="beforeTransitionGroupElementLeave"
    >
      <v-row
          justify="center"
          key="speaker-row"
          v-if="getActivePerson && getActiveClock">
        <SpeakerPanel @set-up-modal="setUpModal"/>
      </v-row>
      <v-row
          justify="center"
          key="history-container-row"
          v-if="getDailyCourse && getDailyCourse.finishedPeople.length">
        <HistoryContainer/>
      </v-row>
    </transition-group>
  </v-container>
</template>

<script>
import {getters as spinnerGetters} from '@/store/modules/spinner/spinner.module';
import OperativeButtonsRow from "@/components/spinner/OperativeButtonsRow";
import Modal from "@/components/spinner/modal/Modal";
import SlotMachineAnimation from "@/components/spinner/modal/SlotMachineAnimation";
import SpeakerPanel from "@/components/spinner/SpeakerPanel";
import HistoryContainer from "@/components/spinner/history/HistoryContainer";
import Card from "@/components/spinner/modal/Card";
import setUpStyleBeforeTransition from "@/utils/common/style.utils";

export default {
  name: "Spinner",
  components: {Card, HistoryContainer, SpeakerPanel, Modal, SlotMachineAnimation, OperativeButtonsRow},
  data() {
    return {
      modalOn: false,
      modalTimeout: Number,
      modalContent: ''
    }
  },
  computed: {
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
    setUpModal(content, timeout) {
      this.modalContent = content
      this.modalTimeout = timeout
      this.modalOn = true
    },
    handleModalClosure() {
      this.modalOn = false
      if (this.modalContent === 'slot-machine') {
        this.$refs.operativeButtons.executeCurrentAction()
      }
    },
    beforeTransitionGroupElementLeave(el) {
      setUpStyleBeforeTransition(el)
    }
  }
}
</script>

<style scoped>

.panel-move {
  transition: all 1s ease;
  transition-delay: 1s;
}

.panel-enter-active {
  transition: all 1s ease;
}

.panel-leave-active {
  position: absolute;
  transition: all 1s ease;
}

.panel-enter, .panel-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

</style>