<script setup>
import navbar from "./components/navbar.vue";
import searchBar from "./components/searchbar.vue";
import ActiveTickets from "./components/ActiveTickets.vue";
import inProgressTickets from "./components/InProgressTickets.vue";
import CompletedTickets from "./components/CompletedTickets.vue";
import Pinia from "./components/PiniaTestingComponent.vue"
import { ref, onMounted, computed, watch } from "vue";

const submittedTodo = ref([]);
const currentEditItem = ref(-1);
const handleSubmittedTodo = (todo) => {
  submittedTodo.value.push(todo);
};

const handleDeleteTodo = (index) => {
  submittedTodo.value.splice(index, 1);
};

const handleSaveTodo = (index, editTodoText) => {
  if (editTodoText.trim() === '') {
    alert('Please Write Something Before Saving');
    return;
  }
  currentEditItem.value = -1;
  submittedTodo.value = submittedTodo.value.map((item, i) =>
    index === i ? editTodoText : item
  );
};

const editTodo = (index) => {
  currentEditItem.value = index;

};
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
    <div class="text-center">
    <Pinia/>
    </div>
  </div>
</template>
