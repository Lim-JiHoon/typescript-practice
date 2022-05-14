"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todoitem_1 = __importDefault(require("./Todoitem"));
const data = [
    { id: 1, task: "장보기", complete: true },
    { id: 2, task: "장보기232", complete: false }
];
for (let i = 0; i < data.length; i++) {
    let v = data[i];
    let todoitem = new Todoitem_1.default(v.id, v.task, v.complete);
    todoitem.printDetails();
}
