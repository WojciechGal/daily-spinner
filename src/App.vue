<template>
  <div id="app">
    <v-app>
      <Header/>
      <NotificationModule/>
      <main>
        <router-view />
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
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-image: url(./assets/wallpaper/casino.jpg);
  background-position: left top;
  background-attachment: fixed;
  background-size: 1800px;

  font-family: Candara ,serif;
}

/*styles needed for hide vuetify automatic scrollbar*/
/*html {*/
/*  overflow-y: auto !important;*/
/*}*/
/*scrollbar returned due to bug in `-move` with vue transition-group with elements jumping on scrollbar on/off*/
/*error could be avoided with classic css transition but require components to be rebuilt*/

</style>
