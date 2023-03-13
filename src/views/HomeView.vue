<script setup>
import { onMounted } from 'vue';
import { count } from '../stores/counter';
import {getpost} from '../stores/getpost';
const store = count();
const data = getpost();
const newArr = data.sendPost;

console.log(data)

onMounted(() => {
  data.getPosts()
})
</script>

<template>
  <main>
    <h1>Home view</h1>
    <h1>{{ store.number }}</h1>
    <button @click="store.increment()">ADD</button>
  </main>
</template>

<style scoped>
button {
  padding: 10px;
  background: greenyellow;
}
</style>




