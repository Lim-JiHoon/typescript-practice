import { data } from "./data";
import TodoCollection from "./TodoCollection";
import TodoItem from "./Todoitem";

const sampleTodos: TodoItem[] = data.map((item) => new TodoItem(item.id, item.task, item.complete));

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.addTodo("JS 학습");
myTodoCollection.addTodo("친구만나기");
myTodoCollection.markComplete(3, true);

myTodoCollection.todoItems.forEach(item => {
  item.printDetails();
});
