<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll" />
      <span><span>已完成{{count}}</span> / 全部{{todos.length}}</span>
    </label>
    <button class="btn btn-danger" @click="clearAll()">all clear misson</button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue"
import { Todo } from '../types/todos'
export default defineComponent({
  name: "Footer",
  props: {
    todos:{
      type: Array as () => Todo[],
      required: true
    },
    checkAll:{
      type: Function,
      required: true
    },
    clearAll:{
      type: Function,
      required: true
    }
  },
  setup(props) {
    const count = computed(() => {
      return props.todos.reduce((pre, todo) => pre +(todo.isCompleted? 1 : 0), 0)
    })
    const isCheckAll = computed({
      get(){
        console.log(isCheckAll)
        return count.value > 0 && props.todos.length === count.value
      },
      set(val){
        props.checkAll(val)
        console.log(isCheckAll.value)
      }
    })
    return{
      count,
      isCheckAll
    }
  },
})
</script>
<style scoped>
.todo-footer{
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
}

.todo-footer span{
  padding-left: 10px;
  font-weight: 700;
}

.btn-danger{
  background: orangered;
  color: white;
}
</style>
