<template>
  <div class="poll">
    <CardComponent :text="this.polls[item.id].question" @click="log"></CardComponent>
  </div>
</template>
<!-- polls[questionId].text -->
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
  methods: {
    // eslint-disable-next-line no-console
    log() {
      console.log(this);
    },
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
<!-- //v-for="item in polls"  -->