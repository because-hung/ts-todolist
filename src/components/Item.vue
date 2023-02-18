<template>
  <li @mouseenter="mouseHandler(true)" @mouseleave="mouseHandler(false)" :style="{backgroundColor: bgColor, color: fontColor}">
    <label>
      <input type="checkbox" v-model="isCompleted" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="showBtn" @click="delTodo()">delete</button>
  </li>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import { Todo } from '../types/todos'
export default defineComponent({
  name: "Item",
  props: {
    // todo: Object as () => Todo // return Todo 類型
    todo:{
      type: Object as () => Todo,
      required: true
    },
    deleteTodo:{
      type: Function,
      required: true
    },
    index:{
      type: Number,
      required: true
    },
    checkTodo: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const bgColor = ref('white')
    const fontColor = ref('black')
    const showBtn = ref(false)

    function mouseHandler(flag: boolean){
      if(flag){
        bgColor.value = 'pink'
        fontColor.value = 'green'
        showBtn.value = true
      }else{
        bgColor.value = 'white'
        fontColor.value = 'black'
        showBtn.value = false
      }
    }

    function delTodo(){
      if(window.confirm('確定刪除嗎???')){
        props.deleteTodo(props.index)
      }
    }
    
     const isCompleted = computed({
      get(){
        return props.todo.isCompleted
      },
      set(val){
        props.checkTodo(props.todo, val)
      }
     })

    return{
      bgColor,
      fontColor,
      mouseHandler,
      showBtn,
      delTodo,
      isCompleted
    }
  },
})
</script>
<style scoped>
li{
display: flex;
justify-content: space-between;
}

.btn-danger{
  background: orangered;
}
</style>
