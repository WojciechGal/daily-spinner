<template>
  <div id="app">
    <header>
      <router-link :to="routes[1].path">{{routes[1].name}}</router-link>
      <router-link :to="routes[2].path">{{routes[2].name}}</router-link>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import routes from "@/router/routes";

export default {
  name: 'App',
  data() {
    return {
      routes: routes
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
