<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <div class="todo-header">
        <input type="text" placeholder="enter mission name">
      </div>
      <ul class="todo-main">
        <li>
          <label>
            <input type="checkbox" />
            <span>xxxx</span>
          </label>
          <button class="btn btn-danger" style="display: none">delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>yyyy</span>
          </label>
          <button class="btn btn-danger" style="display: none">delete</button>
        </li>
      </ul>
      <div class="todo-footer">
        <label>
          <input type="checkbox">
          <span><span>已完成0</span> / 全部2</span>
        </label>
        <button class="btn btn-danger">all clear misson</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name:'APP',
  setup() {
    
  },
})
</script>
<style scoped>


.todo-wrap{
  width: 500px;
  padding: 10px;
  border: black 1px solid;
}
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
