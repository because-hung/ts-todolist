<script setup lang="ts">
import { computed } from "@vue/runtime-core"
import { TodoStatus } from "../types"
import useTodos from "../store/useTodos"
interface Props {
  status: TodoStatus
}

const props = defineProps<Props>()

// const pendingTodos: Todo[] = [
//   {
//     id: 1,
//     title: "practice",
//     desc: "watch youtube",
//     status: TodoStatus.Pending,
//   },
// ]  // 原本的  分出去

const { getTodosByStatus } = useTodos();
const todoList = getTodosByStatus(props.status)



const groupLabel = {
  [TodoStatus.Pending]: "Pending",
  [TodoStatus.Progress]: "Progress",
  [TodoStatus.Complete]: "Complete"
}

// 舊方法 change
// const groupLabel = computed(() => {
//   switch (props.status) {
//     case TodoStatus.Pending:
//       return "Pending"
//     case TodoStatus.Progress:
//       return "Progress"
//     case TodoStatus.Complete:
//       return "Complete"
//     default:
//       return "Todo Group"
//   }
// })
</script>
<template>
  <div>
    <!-- <h3>{{ groupLabel }}</h3> -->
    <h3>{{ groupLabel[props.status] }}</h3>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>
