<template>
    <div>
        <h2 class="text-[20px] font-medium">Counter Function</h2>
        <div>Count:{{store.count}}</div>
        <div>Double Count:{{store.doublecount}}</div>
        <button @click="store.increment" class=" border-solid border-2 border-sky-500 hover:text-white hover:bg-sky-500  rounded-full mt-2 p-1"> Increase Number </button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import {useCounterStore} from "../store/counter"
const store = useCounterStore();
</script>