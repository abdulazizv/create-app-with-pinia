<script setup>
import { onMounted } from 'vue'
import { count } from '@/stores/counter'
import { getpost } from '@/stores/getpost'
import { deletepost } from '@/stores/deletepost'
const store = count()
const data = getpost();
const newArr = data.sendPost
console.log(newArr)
console.log(data)

const deletePost =deletepost();


const deletPost = (id) => {
    deletePost.deletePost(2);
}

onMounted(() => {
  data.getPosts()
})
</script>

<template>
  <h1>{{ store.number }}</h1>

  <button @click="store.increment">ADD</button>
  <button @click="deletPost">DELETE</button>
</template>

<style></style>
