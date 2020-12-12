<template>
  <v-card
      width="400"
      color="red"
      class="ma-3 internal-padding"
  >
    <v-row justify="center">
      <div class="card-title">Participants:</div>
    </v-row>
    <transition name="people">
      <div v-if="getConfig.people.length === 0">
        No people assign for daily
      </div>
    </transition>
    <transition-group name="people">
      <template v-for="person in getConfig.people">
        <v-row justify="center" :key="person.id">
          <v-col align="center">
            <PersonCard :person="person" @remove="removePerson"/>
          </v-col>
        </v-row>
      </template>
    </transition-group>
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

.card-title {
  font-size: 20px;
  font-weight: bold;
}

.people-enter-active, .people-leave-active {
  transition: all 1s;
}

.people-enter, .people-leave-active {
  opacity: 0;
  transform: translateX(30px);
}

</style>