<template>
  <div>
    <span class="text-[30px] block font-mono font-bold text-center"
      >In Progress</span
    >
    <div 
    v-for="(todo, index) in inProgress"
      :key="index"
      class="bg-[#008cff] text-[20px] font-medium p-3 px-6 my-6 rounded-full flex items-center justify-between"
    >
    {{todo}}
      <div class="icons flex">
        <div class="prev-icon mx-4 hover:fill-[#ff0000] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="22"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </div>
        <div class="next-icon mx-4 hover:fill-[#6aff00] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="22"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
            <path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["inProgress"]);
</script>
