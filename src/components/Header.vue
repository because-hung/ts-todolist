<template>
  <div class="todo-header">
    <input type="text" placeholder="enter mission name" v-model="event" @keyup.enter="addData()" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"
export default defineComponent({
  name: "Header",
  props: {
    addTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const event = ref('')
    function addData(){
    const txt = event.value
    if(!txt.trim()) return

    const todo = {
      id: Date.now(),
      title: txt,
      isCompleted: false
    }
    props.addTodo(todo)
    event.value = ''
    }

    return{
      event,
      addData
    }
  },
})
</script>
<style scoped>
.todo-header input {
  width: 70%;
  height: 30px;
  padding-left: 10px;
}
</style>
