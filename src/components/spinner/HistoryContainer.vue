<template>
  <v-row justify="center">
    <v-card
        color="red"
        width="700"
        class="ma-3"
        :class="{'card-container': !biggerScale, 'card-container-bigger-scale': biggerScale}"
    >
      <template v-for="person in finishedPeople">
        <v-row
          :key="person.id"
          class="margin-left-right"
        >
          <v-col align="center">
            <PersonStatisticsCard :person-statistics="person"/>
          </v-col>
        </v-row>
      </template>
    </v-card>
  </v-row>
</template>

<script>
import PersonStatisticsCard from "@/components/spinner/PersonStatisticsCard";
export default {
  name: "HistoryContainer",
  components: {PersonStatisticsCard},
  props: {
    finishedPeople: {
      type: Array,
      required: true
    },
    biggerScale: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style scoped>

.card-container {
  max-height: 39vh;
  overflow-y: auto;
}

.card-container-bigger-scale {
  max-height: 78vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.margin-left-right {
  margin-left: 0;
  margin-right: 0;
}

</style>