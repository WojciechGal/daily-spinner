<template>
  <v-card
    width="400"
    color="red"
    class="ma-3 internal-padding"
  >
    <div v-if="getConfig.people.length > 0">
      <template v-for="person in getConfig.people">
        <v-row justify="center" :key="person.id">
          <v-col align="center">
            <PersonCard :person="person" @remove="removePerson"/>
          </v-col>
        </v-row>
      </template>
    </div>
    <div v-else class="margin-bottom">
      No people assign for daily
    </div>
  </v-card>
</template>

<script>
import PersonCard from "@/components/configuration/participants/content/PersonCard";
import {
  actions,
  getters
} from '@/store/modules/configuration/configuration.module';

export default {
  name: "PeopleContainer",
  components: {PersonCard},
  methods: {
    removePerson(id) {
      actions.removePerson(id)
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

.internal-padding {
  padding-top: 8px;
  padding-bottom: 8px;
}

</style>