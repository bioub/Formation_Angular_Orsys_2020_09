// export interface Todo {
//   id?: number;
//   title: string;
//   completed: boolean;
//   [key: string]: any;
// }

export class Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type TodoDto = Omit<Todo, 'id'>;
