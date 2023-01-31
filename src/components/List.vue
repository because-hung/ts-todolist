<template>
  <ul class="todo-main">
    <Item v-for="(item, i) in todos" :key="i" :todo="item" />
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import Item from './Item.vue'
export default defineComponent({
  name: "List",
  components:{
    Item
  },
  props:['todos'],
  setup() {},
})
</script>
<style scoped>
.todo-main{
  padding: 0;
  width: 100%;
}

.todo-main li{
  list-style-type: none;
  padding: 10px;
  margin-bottom: 1px;
  border: black 1px solid;
}

.todo-main span{
 padding-left: 10px;
}
</style>
