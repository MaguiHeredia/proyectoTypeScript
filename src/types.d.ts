type AddTodo = (newTodo: string) => void;
type RemoveTodo = (todoToRemove: Todo) => void;
type EditTodo = (todoToEdit: string, todo: Todo) => void;

type Todo = {
  text: string;
  complete: boolean;
  id: number
}

type ToggleComplete = (selectedTodo: Todo) => void;

type Option = {
  value: string;
  onClick: () => void;
  color?: string;
}
