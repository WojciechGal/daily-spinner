<template>
  <v-card
      width="500"
      color="red"
  >
    <v-row
        align="center"
    >
      <v-col>
        <v-text-field
            class="margin-left"
            v-model="givenName"
            placeholder="Enter name for new participant"
            color="black"
        />
      </v-col>
      <v-col cols="4">
        <v-btn
            class="ma-4"
            color="success"
            @click="addPerson"
        >
          Add
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {actions, getters} from "@/store/modules/configuration/configuration.module";

export default {
  name: "PersonInput",
  data() {
    return {
      givenName: ''
    }
  },
  methods: {
    addPerson() {
      actions.addPerson(this.givenName)
      this.givenName = ''
    }
  },
  computed: {
    getConfig() {
      return getters.configuration()
    }
  }
}
</script>

<style scoped>
  .margin-left {
    margin-left: 50px;
  }
</style>