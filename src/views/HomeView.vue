<script setup>
import { onMounted } from "vue";
import { count } from "@/stores/counter";
import { getpost } from "@/stores/getpost";
import {deletepost} from '@/stores/deletepost';
const store = count();
const data = getpost();
const newArr = data.sendPost;
console.log(newArr)
console.log(data)
onMounted(() => {
  data.getPosts()
})
</script>


<template>
  <h1>{{ store.number }}</h1>


  <button @click="store.increment">ADD</button>
</template>



<style></style>