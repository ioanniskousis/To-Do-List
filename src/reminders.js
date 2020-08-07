class Reminders {
  constructor() {
    this.todos = [];
  }

  loadDB() {
    const storage = JSON.parse(localStorage.getItem('myLibrary'));
    if (storage) {
      storage.forEach((todo) => {
        this.add(new Todo(todo.id, todo.author, todo.title, todo.numOfPages, todo.read));
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
    localStorage.setItem('myLibrary', JSON.stringify(this.todos));
  }

  newID() {
    if (this.todos.length === 0) {
      return 1;
    }
    return this.todos[this.todos.length - 1].id + 1;
  }
}

export default Reminders;
