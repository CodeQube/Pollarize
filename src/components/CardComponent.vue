<template>
  <div
    class="main-container"
    :style="{
      border: status == 'Active' ? '2px solid #53BC64' : '2px solid #BC5353',
    }"
  >
    <h1>
      <div class="animate__animated animate__wobble">{{ text }}</div>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    text: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 45px;
  border-radius: 20px;
  background-color: #252c36;
  text-align: center;
  margin-top: 30px;
}

h1 {
  font-size: 15px;
  font-weight: normal;
  color: #ffffff;
}
</style>
