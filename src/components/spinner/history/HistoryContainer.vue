<template>
    <v-row justify="center">
      <v-card
          color="red"
          width="700"
          class="ma-3 container-card"
          ref="containerCard"
      >
        <transition-group
          name="people"
          @before-enter="beforeEnterPersonElement"
          @before-leave="beforeLeavePersonElement"
        >
          <template v-for="person in finishedPeople">
            <v-row
                :key="person.id"
            >
              <v-col align="center">
                <PersonStatisticsCard :person-statistics="person"/>
              </v-col>
            </v-row>
          </template>
        </transition-group>
      </v-card>
    </v-row>
</template>

<script>
import PersonStatisticsCard from "@/components/spinner/history/content/PersonStatisticsCard";
export default {
  name: "HistoryContainer",
  components: {PersonStatisticsCard},
  props: {
    finishedPeople: {
      type: Array,
      required: true
    }
  },
  methods: {
    adjustContainerHeight() {
      this.$refs.containerCard.$el.style.height = (this.finishedPeople.length * 183 + 16) + 'px'
    },
    beforeEnterPersonElement() {
      this.adjustContainerHeight()
    },
    beforeLeavePersonElement() {
      setTimeout(() => {
        this.adjustContainerHeight()
      }, 1000)
    }
  }
}
</script>

<style scoped>

.container-card {
  padding-top: 8px;
  padding-bottom: 8px;
  height: 199px;
  transition: height 1s linear;
  overflow: hidden;
}

.people-enter-active {
  transition: all 1s;
  transition-delay: 1s;
}
.people-leave-active {
  transition: all 1s;
}
.people-enter, .people-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>