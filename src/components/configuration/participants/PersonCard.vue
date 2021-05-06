<template>
  <v-card
      width="300"
      color="red"
  >
    <v-row align="center">
      <v-col>
        <div class="person-name">
          {{person.name}}
        </div>
      </v-col>
      <v-col>
        <v-btn
            class="ma-3"
            color="warning"
            @click="removePerson"
        >
          Delete
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  methods: {
    removePerson() {
      this.$emit('remove', this.person.id)
    }
  }
}
</script>

<style scoped>

.person-name {
  font-weight: bold;
}

</style>