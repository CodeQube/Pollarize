<template>
  <div class="main-container">
    <h1>Navnet på pollen her</h1>
    <h1>Pollarize</h1>
    <h2>Rediger/Tilbake</h2>
    <h2>Logg ut</h2>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      counter: 11,
    };
  },
  methods: {
    increment() {
      this.counter += 1;
      this.$emit('increment');
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid black;
}
</style>
