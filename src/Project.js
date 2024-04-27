export default class Project {
  constructor(name) {
    this._name = name;
    this._todos = [];
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  addTodo(todo) {
    this._todos.push(todo);
  }

  get todos() {
    return this._todos;
  }
}
