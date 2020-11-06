<template>
  <div>
    CONFIG
    <div>Actual time in config now: {{getConfig.timePerPerson}}</div>
    <div>
      <button @click="updateConfig">UP</button>
    </div>
  </div>
</template>

<script>
import {
  actions,
  getters
} from '@/store/modules/configuration.module';
import {Configuration} from "@/model/Configuration.model";

export default {
  name: "Configuration",
  methods: {
    updateConfig() {
      actions.changeConfiguration(new Configuration([], (this.getConfig.timePerPerson) + 1))
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

</style>