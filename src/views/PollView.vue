<template>
  <div class="poll" v-for="item in polls" v-bind:key="item">
    <CardComponent :text="item.question"></CardComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import CardComponent from '@/components/CardComponent.vue';
export default {
  name: 'PollView',
  props: {
    polls: Array,
  },
  components: {
    CardComponent,
  },
};
</script>

<style>
.poll {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #2c3e50;
  color: #ffffff;
}
</style>
