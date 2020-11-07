<template>
  <div>
    CONFIG
    <div>
      <div>Time per person in daily is: {{getConfig.timePerPerson}}</div>
<!--      <div>-->
<!--        <select class="test-select" v-model="selectedTime">-->
<!--          <option v-for="time in allowedTime" :key="time" :value="time">{{time/60}}</option>-->
<!--        </select>-->
<!--      </div>-->
      <v-col cols="1">
        <v-select
            v-model="selectedTime"
            :items="allowedTime"
            menu-props="auto"
            label="Select"
            hide-details
            prepend-icon="mdi-clock"
            single-line
            outlined
            light
            color="red"
            item-color="red"
        ></v-select>
      </v-col>
    </div>
    <div class="flex-container">
      <div class="left-side">
        <template v-for="person in getConfig.people">
          <Person :key="person.id" :person="person" @remove="removePerson"/>
        </template>
      </div>
      <div class="right-side">
        <input class="test-input" v-model="givenName">
        <button class="test-button" @click="addPerson">ADD</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  actions,
  getters
} from '@/store/modules/configuration/configuration.module';
import Person from "@/components/configuration/Person";
import allowedTime from "@/templates/configuration/allowedTime.template";

export default {
  name: "Configuration",
  components: {Person},
  data() {
    return {
      selectedTime: null,
      givenName: '',
      allowedTime: allowedTime
    }
  },
  methods: {
    addPerson() {
      actions.addPerson(this.givenName)
      this.givenName = ''
    },
    removePerson(id) {
      actions.removePerson(id)
    }
  },
  computed: {
    getConfig() {
      return getters.configuration()
    }
  },
  mounted() {
    this.selectedTime = this.getConfig.timePerPerson
  },
  watch: {
    selectedTime: (val => {
      actions.updateTime(val * 60)
    })
  }
}
</script>

<style scoped>

  .flex-container {
    display: flex;
  }
  .left-side {
    flex: 50%;
  }
  .right-side {
    flex: 50%;
  }
  .test-select {
    border: 1px solid black;
  }
  .test-input {
    border: 1px solid black;
  }
  .test-button {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }
</style>