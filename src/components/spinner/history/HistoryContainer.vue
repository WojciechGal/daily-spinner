<template>
    <v-row justify="center">
      <v-card
          color="red"
          width="700"
          class="ma-3 internal-padding"
      >
        <transition-group name="people">
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
  }
}
</script>

<style scoped>

.internal-padding {
  padding-top: 8px;
  padding-bottom: 8px;
}

.people-enter-active, .people-leave-active {
  transition: all 1s;
}

.people-enter, .people-leave-active {
  opacity: 0;
  transform: translateX(30px);
}

</style>