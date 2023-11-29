<script setup>
import navbar from "./components/navbar.vue";
import searchBar from "./components/searchbar.vue";
import searchButton from "./components/searchbtn.vue";
import ActiveTickets from "./components/AtciveTickets.vue";
import inProgressTickets from "./components/InProgressTickets.vue";
import CompletedTickets from "./components/CompletedTickets.vue";
import { ref, onMounted, computed, watch} from "vue";
  // const todos = ref([])
  // const input_content = ref('')
  // const addtodo = () => {
  //   if (input_content.value.trim()==='')
  //   return
  // console.log( );
  // }

const activeTask = ref([]);

  const name = ref("");
const submit = () => {
  const newListIterm = {
    newTitle: name.value,
  };
  activeTask.value.push(newListIterm);

console.log(activeTask.value);
};
// const count = ref(0);
// const handleChange = () => {
//   count.value++;
  
// };
// const ActiveTicket = count;
// const CounterBtn = handleChange



// const parentValue = ref('');
// console.log(parentValue)
const inputValue = (e) => {
console.log(e.target.value)
}

const submittedTodo = ref([]);

const handleSubmittedTodo = (todo) => {
  submittedTodo.value.push(todo)
};

const handleDeleteTodo = (index) => {
  submittedTodo.value.splice(index, 1);
};
</script>

<template>
  <div>
    <navbar/>
    <div>
      <searchBar @submit="handleSubmittedTodo"/>
    </div>
    <div class="flex mt-8">
      <div class="w-[33.33%]">
        <ActiveTickets :submittedTodo="submittedTodo" @deleteTodo="handleDeleteTodo"/>
      </div>
      <div class="w-[33.33%]">
        <inProgressTickets />
      </div>
      <div class="w-[33.33%]">
        <CompletedTickets />
      </div>
    </div>
  </div>
</template>
