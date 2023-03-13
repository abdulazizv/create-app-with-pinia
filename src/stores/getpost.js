import { defineStore } from 'pinia';
import axios from '../service/axios';

export const getpost = defineStore('getpost',{
    state: () => ({
        postList:[],
        isLoading: false,
        status:null

    }),
    actions:{
        async getPosts() {
            try {
                const response = await axios.get('/posts');
                if(response.status == 200) {
                    this.postList = response.data;
                }
            } catch (error) {
                console.log(e)
                this.status = e.message;
            }
        }
    },
})