<!-- <template>
  <div>
   <div class="mt-8 justify-center items-center flex">
    <input
      type="search"
      v-model="todo"
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
import { ref } from "vue";
const todo = ref("");
const emit = defineEmits();
const submit = () => {
  if (todo.value.trim() !== "") {
    emit('submit', todo.value);
    todo.value = '';
  }
};
window.addEventListener('keydown', function(e){
  if(e.key == "Enter"){
    submit()
  }
})
</script> -->


<template>
  <div>
    <div class="mt-8 justify-center items-center flex">
      <input
        type="search"
        v-model="todo"
        placeholder="Enter Text"
        class="border-[2px black] focus:outline-none border-2 border-slate-950 p-2 w-[400px] text-[18px] rounded-md"
      />
      <div class="ml-2 hover:sepia grid">
        <button @click="submit">
          <img src="../assets/images/icons8-add-64.png" width="50" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import { v4 as uuidv4 } from "uuid";
const todo = ref("");
const emit = defineEmits();
const submit = () => {
  if (todo.value.trim() !== "") {
    // const id = generateUniqueId(); // You need to define or import a function to generate unique ids
    emit('submit', { id:Date.now(), todo: todo.value });
    todo.value = '';
  }
};

// Example function to generate a unique id
// const generateUniqueId = () => {
//   return Date.now();
// };
// const generateUniqueId = require("uuid/v4") 
// '_' + Math.random().toString(36).substr(2, 9)

  window.addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
      submit();
    }
  });
</script>




<!-- {
// const submit = () => {
//   if (todo.value.trim() !== "") {
//     emit('submit', todo.value);
//     todo.value = '';
//   }
// };
} -->