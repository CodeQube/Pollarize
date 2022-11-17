<template>
  <div
    class="animate__animated animate__slideInLeft main-container"
    :style="{
      border: status == 'Active' ? '2px solid #53BC64' : status == 'Inactive' ? '2px solid #BC5353' : '2px solid white' ,
    }"
  >
    <h1>
      <div class="animate__animated animate__fadeInRightBig">
        {{ text }}
      </div>
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
    id: {
      type: Number,
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

.animate__fadeInRightBig {
  --animate-delay: 0.5s;
}
</style>
