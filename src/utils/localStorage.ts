import { Todo } from "../types/todos"
export function saveTodos(todos: Todo[]) {
  localStorage.setItem("todos_key", JSON.stringify(todos))
}

export function getTodos(): Todo[] {
  return JSON.parse(localStorage.getItem("todos_key") || "[]")
}
