<template>
  <div id="app">
    <v-app>
      <Header/>
      <main>
        <router-view />
      </main>
    </v-app>
  </div>
</template>

<script>
import Header from "@/components/common/Header";

export default {
  name: 'App',
  components: {Header}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url(./assets/wallpaper/casino.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/*styles needed for hide vuetify automatic scrollbar*/
html {
  overflow-y: auto !important;
}

</style>
