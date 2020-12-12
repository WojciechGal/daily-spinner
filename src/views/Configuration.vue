<template>
  <div>
    <v-container>
      <v-row justify="center">
        <TimeSelect/>
      </v-row>
      <v-row justify="center">
        <PersonInput/>
      </v-row>
      <v-row justify="center">
            <SettingsAnimation/>
            <PeopleContainer/>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TimeSelect from "@/components/configuration/TimeSelect";
import PeopleContainer from "@/components/configuration/participants/ParticipantsContainer";
import PersonInput from "@/components/configuration/PersonInput";
import SettingsAnimation from "@/components/configuration/SettingsAnimation";

export default {
  name: "Configuration",
  components: {SettingsAnimation, PersonInput, PeopleContainer, TimeSelect}
}
</script>

<style scoped>

</style>