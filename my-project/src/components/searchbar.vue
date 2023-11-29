<template>
  <div >
   <div class="mt-8 justify-center items-center flex">
    <input
      type="search"
      :value="todo"
      @input="updateTodo"
      placeholder="Enter Text"
      class="border-[2px black] focus:outline-none border-2 border-slate-950 p-2 w-[400px] text-[18px] rounded-md"
    />
      <div class="ml-2 hover:sepia grid">
    <button @click="submit">
    <img src="../assets/images/icons8-add-64.png" width="50">
 </button>
      </div>
      </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
// const props = defineProps(["enter-text"]);
// // const inputValue = defineProps('inputValue');
// const activeTask = ref([]);
// const todo = ref("");

// const submit = () => {
//   console.log(todo.value);
// };


import { defineProps, defineEmits, ref } from 'vue';
const emit = defineEmits();
const todo = ref([]);

const updateTodo = (event) => {
  todo.value = event.target.value;
};
const submit = () => {
  emit('submit', todo.value);
  todo.value = '';
};
</script>