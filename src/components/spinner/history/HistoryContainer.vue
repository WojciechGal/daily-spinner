<template>
  <v-card
      color="red"
      width="700"
      class="ma-3 container-card"
      ref="containerCard"
  >
    <transition-group
        name="people"
        @before-enter="beforeEnterPersonElement"
    >
      <template v-for="person in getDailyCourse.finishedPeople">
        <v-row :key="person.id">
          <v-col align="center">
            <PersonStatisticsCard :person-statistics="person"/>
          </v-col>
        </v-row>
      </template>
    </transition-group>
  </v-card>
</template>

<script>
import PersonStatisticsCard from "@/components/spinner/history/PersonStatisticsCard";
import {getters as spinnerGetters} from "@/store/modules/spinner/spinner.module";

export default {
  name: "HistoryContainer",
  components: {PersonStatisticsCard},
  computed: {
    getDailyCourse() {
      return spinnerGetters.dailyCourse()
    }
  },
  methods: {
    adjustContainerHeight() {
      this.$refs.containerCard.$el.style.height = (this.getDailyCourse.finishedPeople.length * 183 + 16) + 'px'
    },
    beforeEnterPersonElement() {
      this.adjustContainerHeight()
    }
  },
  mounted() {
    this.adjustContainerHeight()
  }
}
</script>

<style scoped>

.container-card {
  padding-top: 8px;
  padding-bottom: 8px;
  transition: height 1s ease;
  overflow: hidden;
}

.people-enter-active {
  transition: all 1s ease;
  transition-delay: 1s;
}

.people-leave-active {
  transition: all 1s ease;
}

.people-enter, .people-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>