<template>
<div>
    <span class="text-[30px] block font-mono font-bold text-center">Completed</span>
    <div 
    v-for="(todo, index) in CompletedTask"
      :key="index"
    class="bg-[#00ff04] text-[20px] font-medium  p-3 px-6 m-6 rounded-full flex items-center justify-between">{{todo.todo}}
    <div class="completed-icon mx-4 fill-[white]">
    <svg xmlns="http://www.w3.org/2000/svg" height="26" width="24" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
    </svg>
    </div>
    </div>
</div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps(["CompletedTask"]);

</script>