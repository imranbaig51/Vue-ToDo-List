<template>
  <div>
    <span class="block text-[30px] font-mono font-bold text-center">
      Active Tasks
    </span>
    <div
      v-for="(todo, index) in submittedTodo"
      :key="index"
      class="bg-[#ff5500] text-[20px] font-medium p-3 px-6 m-6 rounded-full flex items-center justify-between"
    >
      <span v-if="currentEditItem !== index">{{ todo }}</span>
      <input v-else  v-model="editTodoText" class="w-[60%] rounded-full px-2" type="text">
      <div class="icons flex">
        <div v-if="currentEditItem !== index"
          class="edit-icon mx-4 hover:fill-white cursor-pointer"
          @click="editTodo(index)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            viewBox="0 0 512 512"
          >
            <!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
            <path
              d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
            />
          </svg>
        </div>
         <div v-else
          class="save-icon mx-4 hover:fill-white cursor-pointer"
          @click="saveTodo(index)"
        >
         Save
        </div>
        <div
          class="delet-icon mx-3 hover:fill-[#ff0000] cursor-pointer"
          @click="deleteTodo(index)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="22"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
            <path
              d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
            />
          </svg>
        </div>
        <div class="next-icon mx-4 hover:fill-[#6aff00] cursor-pointer" 
        @click="sendToNextComponent(todo), deleteTodo(index)">
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
const props = defineProps(["submittedTodo" , "currentEditItem"]);

const emit = defineEmits();
const editTodoText = ref('')

const editTodo = (index) => {
  editTodoText.value = props.submittedTodo[index];
  emit("editTodo", index);
};
const saveTodo = (index ) => {
  emit("saveTodo", index , editTodoText.value);
};

const deleteTodo = (index) => {
  emit("deleteTodo", index);
};

// const submit = () => {
//   if (todo.value.trim() !== "") {
//     emit('submit', todo.value);
//     todo.value = '';
//   };


const sendToNextComponent = (todo) => {
 emit("sendToNextComponent", todo);
};
</script>
