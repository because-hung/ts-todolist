<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <h2>測試 computed{{ com }} </h2> -->
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :checkTodo="checkTodo" />
      <Footer :todos="todos" :checkAll="checkAll" :clearAll="clearAll" />
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
} from "vue"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import List from "./components/List.vue"
import { Todo } from "./types/todos"
import { saveTodos, getTodos } from "./utils/localStorage"

export default defineComponent({
  name: "APP",
  components: {
    Header,
    List,
    Footer,
  },
  setup() {
    // const state = reactive<{todos: Todo[]}>({
    //   todos:[
    //     { id: 1, title: 'Benz', isCompleted: false },
    //     { id: 2, title: 'Bmw', isCompleted: true },
    //     { id: 3, title: 'Audi', isCompleted: false }
    //   ]
    // })
    const state = reactive<{ todos: Todo[] }>({
      todos: [],
    })

    onMounted(() => {
      setTimeout(() => {
        state.todos = getTodos()
      })
    })

    function addTodo(todo: Todo) {
      state.todos.unshift(todo)
    }
    function deleteTodo(index: number) {
      state.todos.splice(index, 1)
    }
    function checkTodo(todo: Todo, isCompleted: boolean) {
      todo.isCompleted = isCompleted
      console.log(todo)
    }
    function checkAll(isCompleted: boolean) {
      state.todos.forEach((todo) => {
        todo.isCompleted = isCompleted
      })
    }
    function clearAll() {
      state.todos = state.todos.filter((todo) => !todo.isCompleted)
    }

    // watch(
    //   () => state.todos,
    //   (value) => {
    //     saveTodos(value)
    //   },
    //   { deep: true }
    // )

    watch(() => state.todos, saveTodos, { deep: true })  // 可以這麼寫

    // 測試 computed

    // const com = computed(()=> {
    //   let res = null;
    //   if(state.todos.length % 2 == 0){
    //     res = 'even'
    //   }else{
    //     res = 'odd'
    //   }
    //   return res
    // })
    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      checkTodo,
      checkAll,
      clearAll,
      // com
    }
  },
})
</script>
<style scoped>
.todo-wrap {
  width: 500px;
  padding: 10px;
  border: black 1px solid;
}
</style>
