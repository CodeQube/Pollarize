<template>
  <div class="home" v-for="item in polls" v-bind:key="item">
    <CardComponent :text="item.pollText"></CardComponent>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
  name: 'PollComponent',
  components: {
    CardComponent,
  },
};
</script>

<style scoped></style>
