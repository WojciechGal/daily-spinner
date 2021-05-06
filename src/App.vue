<template>
  <div id="app">
    <v-app>
      <Header/>
      <NotificationModule/>
      <main class="main">
        <router-view/>
      </main>
    </v-app>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import NotificationModule from "@/components/common/NotificationModule";

export default {
  name: 'App',
  components: {NotificationModule, Header}
}
</script>

<style>

/*styles needed for hide vuetify automatic scrollbar*/
html {
  overflow-y: auto !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-image: url(./assets/wallpaper/casino.jpg);
  background-position: left top;
  background-attachment: fixed;
  background-size: 1800px;

  font-family: Candara, serif;
}

.main {
  width: calc(100vw - 17px);
  margin-right: 17px;
}

</style>
