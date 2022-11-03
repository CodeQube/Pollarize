<template>
  <div class="home" v-for="item in polls" v-bind:key="item">
    <CardComponent  :text="item.pollText" :status="item.status"></CardComponent>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
export default {
  name: 'PollsComponent',
  components: {
    CardComponent,
  },
  data() {
    return {
      polls: [
        { pollText: 'Trivsel på arbeidsplassen', status: 'Active' },
        { pollText: 'Trivsel på arbeidsplassen2', status: 'Inactive' },
    ],
    };
  },
};
</script>

<style scoped></style>

