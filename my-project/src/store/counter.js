import {defineStore} from 'pinia';
import { ref, computed} from 'vue'

export const useCounterStore = defineStore('counter', () =>{
   const count = ref(1)  //State
   const doublecount = computed(() => count.value * 2) // Getters
   function increment(){
    count.value++
   }
   return { count, doublecount, increment }
})