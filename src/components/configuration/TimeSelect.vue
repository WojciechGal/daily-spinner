<template>
  <v-card
      width="600"
      color="red"
      class="ma-3"
  >
    <v-row
        align="center"
        class="inside-padding"
    >
      <v-col>
        <div>
          Time per participant
        </div>
      </v-col>
      <v-col>
        <v-select
            v-model="selectedTime"
            :items="allowedTime"
            menu-props="auto"
            label="Select"
            hide-details
            prepend-icon="mdi-clock"
            single-line
            outlined
            item-value="value"
            light
            color="black"
            item-color="red"
        ></v-select>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {actions, getters} from "@/store/modules/configuration/configuration.module";
import allowedTime from "@/templates/configuration/allowedTime.template";

export default {
  name: "TimeSelect",
  data() {
    return {
      selectedTime: null,
      allowedTime: allowedTime
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
      actions.updateTime(val)
    })
  }
}
</script>

<style scoped>

.inside-padding {
  padding: 5px 20px;
}

</style>