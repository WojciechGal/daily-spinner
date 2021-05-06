<template>
  <v-card
      color="red"
      width="500"
      class="ma-3"
  >
    <v-row>
      <v-col>
        <p class="speaker">
          Now speaks:
          <span class="person-name-span">
              {{ getActivePerson.name }}
            </span>
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Clock :seconds-left="getActiveClock.timeLeft"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Clock from "@/components/spinner/Clock";
import {actions as spinnerActions, getters as spinnerGetters} from '@/store/modules/spinner/spinner.module';

export default {
  name: "SpeakerPanel",
  components: {Clock},
  data() {
    return {
      currentDeadline: null
    }
  },
  computed: {
    getActivePerson() {
      return spinnerGetters.activePerson()
    },
    getActiveClock() {
      return spinnerGetters.activeClock()
    }
  },
  methods: {
    giveYellowCard() {
      spinnerActions.giveYellowCard()
      this.$emit('set-up-modal', 'yellow-card', 2500)
    },
    giveRedCard() {
      spinnerActions.giveRedCard()
      this.$emit('set-up-modal', 'red-card', 2500)
    },
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

.speaker {
  letter-spacing: 0.03em;
  font-size: 30px;
  margin-bottom: 0;
}

.person-name-span {
  font-weight: bold;
}

</style>