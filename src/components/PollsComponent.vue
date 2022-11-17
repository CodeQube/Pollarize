<template>
  <div class="home" v-for="polls in pollsStore.polls" v-bind:key="polls.id">
    <CardComponent
      @click="goToClickedPoll(item.id)"
      :text="polls.pollText"
      :status="polls.status"
    ></CardComponent>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { usePollsStore } from '@/store/PollsStore';
import { mapStores} from 'pinia';

export default {
  name: 'PollsComponent',
  computed: {
    ...mapStores(usePollsStore),
  },
  components: {
    CardComponent,
  },
};
</script>

<style scoped></style>
