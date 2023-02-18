<template>
  <div class="todo-container">
    <div class="todo-wrap">
     <!-- <h2>測試 computed{{ com }} </h2> -->
     <Header :addTodo="addTodo" />
     <List :todos="todos" :deleteTodo="deleteTodo" :checkTodo="checkTodo" />
     <Footer :todos="todos" :checkAll="checkAll" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
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
    function checkTodo(todo: Todo, isCompleted: boolean){
      todo.isCompleted = isCompleted
      console.log(todo)
    }
    function checkAll(isCompleted: boolean){
      state.todos.forEach(todo => {
        todo.isCompleted = isCompleted
      })
    }
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
      checkAll
      // com
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
