<template>
  <v-card
    width="400"
    color="red"
    class="container-props"
  >
    <div v-if="getConfig.people.length > 0">
      <template v-for="person in getConfig.people">
        <Person :key="person.id" :person="person" @remove="removePerson"/>
      </template>
    </div>
    <div v-else class="margin-bottom">
      No people assign for daily
    </div>
  </v-card>
</template>

<script>
import Person from "@/components/configuration/participants/content/PersonCard";
import {
  actions,
  getters
} from '@/store/modules/configuration/configuration.module';

export default {
  name: "PeopleContainer",
  components: {Person},
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

  .container-props {
    padding: 25px 25px 5px 25px;
    max-height: 450px;
    overflow-y: auto;
  }

  .margin-bottom {
    margin-bottom: 16px;
  }

</style>