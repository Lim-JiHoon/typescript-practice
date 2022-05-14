import TodoItem from "./Todoitem";

const data = [
  { id: 1, task: "장보기", complete: true },
  { id: 2, task: "장보기232", complete: false }
]

for (let i = 0; i < data.length; i++) {
  let v = data[i]
  let todoitem = new TodoItem(v.id, v.task, v.complete);
  todoitem.printDetails();
}