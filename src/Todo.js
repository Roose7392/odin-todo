export default class Todo {
  constructor(title, description, dueDate, priority) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get title() {
    return this._title;
  }

  set description(newDescription) {
    this._description = newDescription;
  }

  get description() {
    return this._description;
  }

  set dueDate(newDate) {
    this._dueDate = newDate;
  }

  get dueDate() {
    return this._dueDate;
  }
  set priority(newPriority) {
    this._priority = newPriority;
  }

  get priority() {
    return this._priority;
  }
}
