"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete}`);
    }
}
exports.default = TodoItem;
// class TodoItem {
//   public id: number;
//   public task: string;
//   public complete: boolean;
//   constructor(id: number, task: string, complete: boolean) {
//     this.id = id;
//     this.task = task;
//     this.complete = complete;
//   }
// }
