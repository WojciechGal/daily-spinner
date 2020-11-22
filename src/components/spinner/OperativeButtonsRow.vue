<template>
  <v-row justify="center">
    <v-btn
        v-if="!dailyCourse || dailyCourse.notFinishedPeople.length === 0"
        class="ma-3"
        color="success"
        @click="startDaily"
    >
      Start the Daily
    </v-btn>
    <v-btn
        v-else-if="dailyCourse && dailyCourse.notFinishedPeople.length > 1"
        class="ma-3"
        color="warning"
        @click="nextPerson"
    >
      Draw next Person
    </v-btn>
    <v-btn
        v-if="dailyCourse && dailyCourse.notFinishedPeople.length === 1"
        class="ma-3"
        color="error"
        @click="finishDaily"
    >
      Finish the Daily
    </v-btn>
  </v-row>
</template>

<script>

export default {
  name: "ButtonsRow",
  props: {
    dailyCourse: {
      validator: prop => typeof prop === 'object' || prop === null,
      required: true
    }
  },
  methods: {
    startDaily() {
      this.$emit('start-daily')
    },
    nextPerson() {
      this.$emit('next-person')
    },
    finishDaily() {
      this.$emit('finish-daily')
    }
  }
}
</script>

<style scoped>

</style>