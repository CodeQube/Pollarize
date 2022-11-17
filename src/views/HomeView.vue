<template>
  <div class="home">
    <PollsComponent></PollsComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import PollsComponent from '@/components/PollsComponent.vue';


export default {
  name: 'HomeView',
  components: {
    PollsComponent,
  },
  props: {
    polls: Array,
  },
};
</script>

<style>
.home {
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
