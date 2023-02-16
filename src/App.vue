<template>
  <div class="todo-container">
    <div class="todo-wrap">
     <Header :addTodo="addTodo" />
     <List :todos="todos" :deleteTodo="deleteTodo" />
     <Footer />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import List from './components/List.vue'
import { Todo } from './types/todos'

export default defineComponent({
  name:'APP',
  components:{
    Header,
    List,
    Footer
  },
  setup() {
    const state = reactive<{todos: Todo[]}>({
      todos:[
        { id: 1, title: 'Benz', isCompleted: false },
        { id: 2, title: 'Bmw', isCompleted: true },
        { id: 3, title: 'Audi', isCompleted: false }
      ]
    })
    function addTodo(todo: Todo){
      state.todos.unshift(todo)
    }
    function deleteTodo(index: number){
      state.todos.splice(index, 1)
    }
    return {
      ...toRefs(state),
      addTodo,
      deleteTodo
    }
  },
})
</script>
<style scoped>
.todo-wrap{
  width: 500px;
  padding: 10px;
  border: black 1px solid;
}

</style>
