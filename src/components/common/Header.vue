<template>
  <header>
    <v-tabs
        fixed-tabs
        background-color="red"
        color="black"
    >
      <v-tab :to="routes[1].path">{{routes[1].name}}</v-tab>
      <v-tab :to="routes[2].path">{{routes[2].name}}</v-tab>
    </v-tabs>
  </header>
</template>

<script>
import routes from "@/router/routes";

export default {
  name: 'Header',
  data() {
    return {
      routes: routes
    }
  }
}
</script>

<style scoped>

</style>