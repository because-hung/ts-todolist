<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
      <span><span>已完成0</span> / 全部2</span>
    </label>
    <button class="btn btn-danger">all clear misson</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "Footer",
  setup() {},
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
