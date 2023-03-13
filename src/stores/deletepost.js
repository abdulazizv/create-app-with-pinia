import {defineStore} from 'pinia'
import axios from '../service/axios'

export const deletepost = defineStore('deletepost', {
    state: () => (
        {errMessage: "", status: null}
    ),
    actions: {
        async deletePost(id) {
            try {
                const response = await axios.delete(`/posts/${id}`);
                if (response.status === 200) {
                    const data = response.data;
                    this.status = data.status;
                    console.log("Success")
                }

            } catch (e) {
                console.log(e)
                this.errMessage = e.message;
            }
        }
    }
})  