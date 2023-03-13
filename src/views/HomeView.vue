<script setup>
import { onMounted } from 'vue'
import { count } from '@/stores/counter'
import { getpost } from '@/stores/getpost'
import { deletepost } from '@/stores/deletepost';
import {getonepost} from '../stores/getonepost';
import {updatePost} from '@/stores/updatepost';

const getOnePost = getonepost();
const store = count()
const data = getpost();
const newArr = data.sendPost;

const putPost = updatePost()


const deletePost = deletepost();


const deletPost = () => {
    deletePost.deletePost(2);
}

const getOne = () => {
  getOnePost.getOne(21);
}

const postupdate = () => {
  const title  = 'updated title';
  const body = 'updated body';
  const payload ={
    title: 'updated title',
    body: 'updated body'
  };
  putPost.updateJsonplaceholder(2,payload);

}

onMounted (() => {
  data.getPosts()
})
</script>

<template>
  <h1>{{ store.number }}</h1>

  <button class="incr" @click="store.increment">ADD</button>
  <button class="delete" @click="deletPost">DELETE</button>
  <button class="getone" @click="getOne">get 21</button>
  <button class="updateone" @click="postupdate">UPDATE</button>
</template>

<style>
.incr {
  background-color: green;
  width: max-content;
  height: 50px;
}

.delete {
  background-color: red;
  width: 120px;
  height: 25px;
}

.getone {
  background-color: aqua;
}
</style>
