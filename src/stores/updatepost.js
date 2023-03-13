import {defineStore} from 'pinia'
import axios from '../service/axios'

export const updatePost = defineStore('updatepost', {
    state: () => (
        {errMessage: "", status: null}
    ),
    actions: {
        async updateJsonplaceholder(id,payload) {
            try {
                console.log(id,payload);
                const response = await axios.put(`/posts/${id}`,{payload});
                if (response.status === 200) {
                    const data = response.data;
                    this.status = data.status;
                    console.log(data)
                }
            } catch (e) {
                console.log(e)
                this.errMessage = e.message;
            }
        }
    }
})  