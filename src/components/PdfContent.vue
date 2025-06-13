<script setup lang="ts">
import { onMounted, ref } from 'vue'

const data = ref([])

onMounted(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  data.value = await res.json()
})
</script>
<template>
  <div class="pdf-content">
    <h1>Dynamic PDF</h1>
    <ul v-if="data.length">
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
    <div class="flex">
      <div class="flex__item">1</div>
      <div class="flex__item">2</div>
      <div class="flex__item">3</div>
    </div>
  </div>
</template>

<style lang="scss">
.pdf-content {
  font-family: sans-serif;
  li {
    position: relative;
    padding: 10px 15px;
    border: 1px solid #ccc;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 10%;
      height: 100%;
      background: blue;
    }
  }
}
.flex {
  display: flex;
  &__item {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 5px;
    text-align: center;
    background: lime;
  }
}
</style>
