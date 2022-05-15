"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const Todoitem_1 = __importDefault(require("./Todoitem"));
const sampleTodos = data_1.data.map((item) => new Todoitem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection_1.default("My Todo List", sampleTodos);
console.log(`${myTodoCollection.userName}`);
myTodoCollection.addTodo("JS 학습");
myTodoCollection.addTodo("친구만나기");
myTodoCollection.markComplete(3, true);
myTodoCollection.todoItems.forEach(item => {
    item.printDetails();
});
