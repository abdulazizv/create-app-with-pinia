import {defineStore} from 'pinia'
import axios from '../service/axios'

export const getonepost = defineStore('deletepost', {
    state: () => (
        {errMessage: "", status: null}
    ),
    actions: {
        async getOne(id) {
            try {
                const response = await axios.get(`/posts/${id}`);
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