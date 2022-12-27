import { TodoStatus, Todo } from "../types"
import { reactive, computed } from "vue"

interface TodoStore {
  [TodoStatus.Pending]: Todo[]
  [TodoStatus.Progress]: Todo[]
  [TodoStatus.Complete]: Todo[]
}

const defaultVal = {
  [TodoStatus.Pending]: [
    {
      id: 1,
      title: "practice",
      desc: "watch youtube",
      status: TodoStatus.Pending,
    },
  ],
  [TodoStatus.Progress]: [],
  [TodoStatus.Complete]: [],
}
const TodoStore = reactive<TodoStore>(defaultVal);

export default () => {
  const getTodosByStatus = (todoStatus: TodoStatus) => {
    return computed(() => TodoStore[todoStatus])
  };
  return{
    getTodosByStatus
  }
}