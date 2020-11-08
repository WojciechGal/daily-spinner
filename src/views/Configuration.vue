<template>
  <div>
    <SettingsGif/>
    <v-container>
      <v-row
          justify="center"
          class="upper-margin"
      >
        <TimeSelect/>
      </v-row>
      <v-row
          justify="center"
          class="upper-margin offset-left"
      >
        <v-col>
          <PeopleContainer/>
        </v-col>
        <v-col>
          <PersonInput/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TimeSelect from "@/components/configuration/TimeSelect";
import SettingsGif from "@/components/configuration/SettingsGif";
import PeopleContainer from "@/components/configuration/PeopleContainer";
import PersonInput from "@/components/configuration/PersonInput";

export default {
  name: "Configuration",
  components: {PersonInput, PeopleContainer, SettingsGif, TimeSelect}
}
</script>

<style scoped>

.upper-margin {
  margin-top: 50px;
}

.offset-left {
  margin-left: 200px;
}

</style>