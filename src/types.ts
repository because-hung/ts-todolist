export enum TodoStatus {
    Pending = "pending",
    Progress = "progress",
    Complete = "complete",
  }
  
export interface Todo {
    id: number;
    title: string;
    desc: string;
    status: TodoStatus;
  }
  