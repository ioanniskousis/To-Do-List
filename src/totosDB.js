import Todo from './todoClass';

const todosDB = (() => {
  const todos = [];

  const length = () => this.todos.length;

  const save = () => {
    localStorage.setItem('todolist-todosDB', JSON.stringify(todos));
  };

  const add = (todo) => {
    todos.push(todo);
    save();
  };

  const load = () => {
    const storage = JSON.parse(localStorage.getItem('todolist-todosDB'));
    if (storage) {
      storage.forEach((todo) => {
        todos.push(new Todo(
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
  };

  const findIndex = (id) => {
    for (let index = 0; index < this.todos.length; index += 1) {
      const element = this.todos[index];
      if (element.id === id) {
        return index;
      }
    }
    return -1;
  };

  const remove = (id) => {
    const index = findIndex(id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      save();
      return true;
    }
    return false;
  };

  const newID = () => {
    if (todos.length === 0) {
      return 1;
    }
    return this.todos[this.todos.length - 1].id + 1;
  };

  return {
    todos,
    length,
    load,
    add,
    remove,
    newID,
  };
});

export default todosDB;
