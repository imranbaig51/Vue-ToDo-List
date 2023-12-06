import {defineStore} from 'pinia';
import { ref, computed} from 'vue'

// export const useTodoStore = defineStore('todo', ()=>{
//     // state: () => ({
//     // }),
//     const submittedTodo= ref('')
    
//       const submitTodo =(todo)=> {
//         submittedTodo.value = todo;
//         // this.$emit('submit', todo);
//       }
//       const clearTodo=()=> {
//         submittedTodo.value = '';
//       }
//   });


export const useTodoStore = defineStore('todo', ()=>{
    // state: () => ({
    // }),
    const submittedTodo = ref([]);
    const todo = ref("");
   
const submit = () => {
  if (todo.value.trim() !== "") {
    submittedTodo.value.push(todo)
    todo.value = '';
    return  { submit, todo.value }
  }
   };
  });







// export const useTodoStore = defineStore('eventBus', {
//     state: () => ({
//       submittedTodo: '',
//     }),
//     actions: {
//       emitSubmitEvent(todo) {
//         this.submittedTodo = todo;
//         this.$emit('submit', todo);
//       },
//     },
//   });

// import { defineStore } from 'pinia'

// export const useTodos = defineStore('todos', {
//   state: () => ({
//     /** @type {{ text: string, id: number, isFinished: boolean }[]} */
//     todos: [],
//     /** @type {'all' | 'finished' | 'unfinished'} */
//     filter: 'all',
//     // type will be automatically inferred to number
//     nextId: 0,
//   }),
//   getters: {
//     finishedTodos(state) {
//       // autocompletion! ✨
//       return state.todos.filter((todo) => todo.isFinished)
//     },
//     unfinishedTodos(state) {
//       return state.todos.filter((todo) => !todo.isFinished)
//     },
//     /**
//      * @returns {{ text: string, id: number, isFinished: boolean }[]}
//      */
//     filteredTodos(state) {
//       if (this.filter === 'finished') {
//         // call other getters with autocompletion ✨
//         return this.finishedTodos
//       } else if (this.filter === 'unfinished') {
//         return this.unfinishedTodos
//       }
//       return this.todos
//     },
//   },
//   actions: {
//     // any amount of arguments, return a promise or not
//     addTodo(text) {
//       // you can directly mutate the state
//       this.todos.push({ text, id: this.nextId++, isFinished: false })
//     },
//   },
// })