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
  height: 100%;
  margin-left: -2px;
}

/*styles needed for hide vuetify automatic scrollbar*/
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
