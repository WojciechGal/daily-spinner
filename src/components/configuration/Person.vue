<template>
  <div class="person-card">
    <div>Id is: {{person.id}}</div>
    <div>Name is: {{person.name}}</div>
    <button @click="removePerson">DELETE</button>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  methods: {
    removePerson() {
      this.$emit('remove', this.person.id)
    }
  }
}
</script>

<style scoped>
  .person-card {
    border: 1px solid green;
  }
</style>