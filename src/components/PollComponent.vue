<template>
  <div class="home" v-for="item in polls" v-bind:key="item">
    <CardComponent :text="item.pollText" :status="item.status"></CardComponent>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
  name: 'PollComponent',
  components: {
    CardComponent,
  },
  props: {
    polls: Array,
  },
};
</script>

<style scoped></style>
