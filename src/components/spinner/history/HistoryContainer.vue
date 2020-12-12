<template>
  <v-row justify="center">
    <v-card
        color="red"
        width="700"
        class="ma-3 internal-padding"
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

</style>