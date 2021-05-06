<template>
  <v-card
      width="475"
      color="red"
      class="ma-0 statistics-card"
  >
    <v-row align="center">
      <v-col class="person-name-column">
        {{personStatistics.name}}
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col>
        Time elapsed: {{personStatistics.timeElapsed}}
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col>
        Cards:
        <span v-if="!personStatistics.cards.length">
          None
        </span>
        <template v-else v-for="(card, index) in personStatistics.cards">
          <span
              :key="card.id"
              v-if="index < personStatistics.cards.length - 1">
            {{card.name}},
          </span>
          <span
              :key="card.id"
              v-else>
            {{card.name}}
          </span>
        </template>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "PersonStatisticsCard",
  props: {
    personStatistics: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

.statistics-card {
  font-size: 18px;
}

.person-name-column {
  font-weight: bold;
  font-size: 22px
}

</style>