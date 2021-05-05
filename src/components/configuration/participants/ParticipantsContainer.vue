<template>
  <v-card
      width="400"
      color="red"
      class="ma-3 internal-padding container-card"
      ref="containerCard"
  >
    <v-row justify="center">
      <div class="card-title">Participants:</div>
    </v-row>
    <div class="grid-wrapper">
      <div class="grid-element">
        <transition name="empty-people">
          <div v-if="getConfig.people.length === 0">
            No people assign for daily
          </div>
        </transition>
      </div>
      <div class="grid-element">
        <transition-group
            name="people"
            @before-enter="beforeEnterPersonElement"
            @before-leave="beforeLeavePersonElement"
        >
          <template v-for="person in getConfig.people">
            <v-row justify="center" :key="person.id">
              <v-col align="center">
                <PersonCard :person="person" @remove="removePerson"/>
              </v-col>
            </v-row>
          </template>
        </transition-group>
      </div>
    </div>
  </v-card>
</template>

<script>
import PersonCard from "@/components/configuration/participants/content/PersonCard";
import {
  actions,
  getters
} from '@/store/modules/configuration/configuration.module';

export default {
  name: "PeopleContainer",
  components: {PersonCard},
  methods: {
    removePerson(id) {
      actions.removePerson(id)
    },
    adjustContainerHeight() {
      const peopleLength = this.getConfig.people.length
      if (peopleLength < 1) {
        this.$refs.containerCard.$el.style.height = '72px'
      } else {
        this.$refs.containerCard.$el.style.height = peopleLength * 108 + 46 + 'px'
      }
    },
    beforeEnterPersonElement() {
      this.adjustContainerHeight()
    },
    beforeLeavePersonElement() {
      setTimeout(() => {
        this.adjustContainerHeight()
      }, 1000)
    }
  },
  computed: {
    getConfig() {
      return getters.configuration()
    }
  },
  mounted() {
    this.adjustContainerHeight()
  }
}
</script>

<style scoped>

.internal-padding {
  padding-top: 8px;
  padding-bottom: 8px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
}

.container-card {
  transition: height 1s ease;
  overflow: hidden;
}

.people-move {
  transition: transform 1s ease;
  transition-delay: 1s;
}

.people-enter-active {
  transition: all 1s ease;
  transition-delay: 1s;
}

.people-leave-active {
  position: absolute;
  width: 107%;
  transition: all 1s ease;
}

.people-enter, .people-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.empty-people-enter, .empty-people-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.empty-people-enter-active, .empty-people-leave-active {
  transition: all 1s ease;
}

.grid-wrapper {
  display: grid;
}

.grid-element {
  grid-column: 1;
  grid-row: 1;
}

</style>