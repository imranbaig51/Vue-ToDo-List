<script setup>
import navbar from "./components/navbar.vue";
import searchBar from "./components/searchbar.vue";
// import searchButton from "./components/searchbtn.vue";
import ActiveTickets from "./components/ActiveTickets.vue";
import inProgressTickets from "./components/InProgressTickets.vue";
import CompletedTickets from "./components/CompletedTickets.vue";
import { ref, onMounted, computed, watch } from "vue";
// const todos = ref([])
// const input_content = ref('')
// const addtodo = () => {
//   if (input_content.value.trim()==='')
//   return
// console.log( );
// }

// const activeTask = ref([]);

// const name = ref("");
// const submit = () => {
//   const newListIterm = {
//     newTitle: name.value,
//   };
//   activeTask.value.push(newListIterm);

//   console.log(activeTask.value);
// };
// const count = ref(0);
// const handleChange = () => {
//   count.value++;

// };
// const ActiveTicket = count;
// const CounterBtn = handleChange

// const parentValue = ref('');
// console.log(parentValue)
// const inputValue = (e) => {
//   console.log(e.target.value);
// };

const submittedTodo = ref([]);
const currentEditItem = ref(-1);
const handleSubmittedTodo = (todo) => {
  submittedTodo.value.push(todo);
};

const handleDeleteTodo = (index) => {
  submittedTodo.value.splice(index, 1);
};

const handleSaveTodo = (index, editTodoText) => {
  currentEditItem.value = - 1;
    editTodo = submittedTodo.value
  submittedTodo.value = submittedTodo.value.map((item, i) =>
    index === i ? editTodoText : item
  );
};
const editTodo = (index) => {
  currentEditItem.value = index;
};

// const editTodoText = ref('');
// const originalTodoText = ref('');

// const editTodo = (index) => {
//   currentEditItem.value = index;
//   originalTodoText.value = submittedTodo.value[index];
//   editTodoText.value = submittedTodo.value[index];
// };

// const saveTodo = (index) => {
//   currentEditItem.value = -1;
//   submittedTodo.value = submittedTodo.value.map((item, i) =>
//     index === i ? editTodoText.value : item
//   );
// };

const inProgress = ref([]);

const handleInProrss  = (todo) => {
  inProgress.value.push(todo);
};
const handleAgainActive  = (todo) => {
  submittedTodo.value.push(todo);
};
const Completed = ref([]);
const handleCompleted  = (todo) => {
  Completed.value.push(todo);
  console.log(todo);
};

const inProgressDeleteTodo = (index) => {
  inProgress.value.splice(index, 1);
};
</script>

<template>
  <div>
    <navbar />
    <div>
      <searchBar @submit="handleSubmittedTodo" />
    </div>
    <div class="flex mt-8">
      <div class="w-[33.33%]">
        <ActiveTickets
        :submittedTodo="submittedTodo"
        @deleteTodo="handleDeleteTodo"
        @saveTodo="handleSaveTodo"
        :currentEditItem="currentEditItem"
        @editTodo="editTodo"
        @sendToNextComponent="handleInProrss"
        />
      </div>
      <div class="w-[33.33%]">
        <inProgressTickets 
        :inProgress="inProgress"
        @deleteTodo="inProgressDeleteTodo"       
        @sendToNextComponent="handleCompleted"
        @sendToPreviosComponent="handleAgainActive"
        />
      </div>
      <div class="w-[33.33%]">
        <CompletedTickets 
        :CompletedTask="Completed"
        />
      </div>
    </div>
  </div>
</template>
