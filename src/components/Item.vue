<template>
  <li>
    <label>
      <input type="checkbox" v-model="todo.isCompleted" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" style="display: none">delete</button>
  </li>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { Todo } from '../types/todos'
export default defineComponent({
  name: "Item",
  props: {
    todo: Object as () => Todo // return Todo 類型
  },
  setup() {},
})
</script>
<style scoped></style>
