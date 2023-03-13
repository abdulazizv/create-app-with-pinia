// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0);
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const count = defineStore('count', {
  state: () => ({
    number: 0
  }),
  getters: {
    reset: (state) => state.number == 0
  },
  actions: {
    increment () {
      this.number ++
    }
  }
})
