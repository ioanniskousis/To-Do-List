import Todo from './todoClass';

class Reminders {
  constructor() {
    this.todos = [];
  }

  load() {
    const storage = JSON.parse(localStorage.getItem('todolist-todos'));
    if (storage) {
      storage.forEach((todo) => {
        this.add(new Todo(
          todo.id,
          todo.projectId,
          todo.title,
          todo.description,
          todo.dueDate,
          todo.complete,
          todo.priority,
          todo.notes,
          todo.checklist,
        ));
      });
    }
  }

  length() {
    return this.todos.length;
  }

  find(id) {
    for (let index = 0; index < this.todos.length; index += 1) {
      const element = this.todos[index];
      if (element.id === id) {
        return index;
      }
    }
    return -1;
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(id) {
    const index = this.find(id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.save();
      return true;
    }
    return false;
  }

  save() {
    localStorage.setItem('todolist-todos', JSON.stringify(this.todos));
  }

  newID() {
    if (this.todos.length === 0) {
      return 1;
    }
    return this.todos[this.todos.length - 1].id + 1;
  }
}

export default Reminders;
