<template>
  <v-card
      width="500"
      color="red"
      class="ma-3"
  >
    <v-row align="center">
      <v-col>
        <v-text-field
            v-model="givenName"
            placeholder="Enter name"
            color="black"
            class="text-input"
        />
      </v-col>
      <v-col>
        <v-btn
            class="ma-4"
            color="success"
            @click="addPerson"
        >
          Add participant
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {actions, getters} from "@/store/modules/configuration/configuration.module";
import notificationsEventBus from "@/notification/notificationsEventBus";

export default {
  name: "PersonInput",
  data() {
    return {
      givenName: ''
    }
  },
  methods: {
    addPerson() {
      if (this.givenName !== '') {
        actions.addPerson(this.givenName)
        this.givenName = ''
      } else {
        notificationsEventBus.$emit('turn-on-no-input-notification')
      }
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

.text-input {
  font-size: 20px;
  margin-left: 3vw;
  margin-right: 8px;
  min-width: 100px;
}

</style>