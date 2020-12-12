<template>
  <div class="notification-wrapper">
    <v-alert
        v-model="noInputNotificationOn"
        color="orange"
        elevation="6"
        type="error"
        transition="scale-transition"
        dismissible
    >
      {{noInputNotificationMessage}}
    </v-alert>
  </div>
</template>

<script>
import notificationsEventBus from "@/notification/notificationsEventBus";

export default {
  name: "NotificationModule",
  data() {
    return {
      noInputNotificationMessage: 'You must enter the name!',
      noInputNotificationOn: false,
    }
  },
  mounted() {
    notificationsEventBus.$on('turn-on-no-input-notification',
        () => this.noInputNotificationOn = true)
  }
}
</script>

<style scoped>

.notification-wrapper {
  position: absolute;
  bottom: 0;
  right: 16px;
  z-index: 9;
}

</style>