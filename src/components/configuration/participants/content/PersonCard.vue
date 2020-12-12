<template>
  <v-card
      width="350"
      color="red"
      class="margin-bottom"
  >
    <v-row
        align="center"
    >
      <v-col>
        <div>
          {{person.name}}
        </div>
      </v-col>
      <v-col cols="5">
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
  name: "Person",
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

  .margin-bottom {
    margin-bottom: 20px;
  }

</style>