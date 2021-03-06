class TodoItem {
  constructor(
    public id: number,
    public task: string,
    public complete: boolean = false) { }

  printDetails(): void {
    console.log(`${this.id}\t${this.task}\t${this.complete}`);
  }
}

export default TodoItem;

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