import Todo from './todoClass';

const todosDB = (() => {
  const todos = [];

  const length = () => todos.length;

  function compareIds(a, b) {
    return a.id - b.id;
  }

  const findIndex = (id) => {
    for (let index = 0; index < todos.length; index += 1) {
      const element = todos[index];
      if (element.id === id) {
        return index;
      }
    }
    return -1;
  };

  const save = () => {
    localStorage.setItem('todolist-todosDB', JSON.stringify(todos));
  };

  const newID = () => {
    todos.sort(compareIds);
    if (todos.length === 0) {
      return 1;
    }
    return todos[todos.length - 1].id + 1;
  };

  const add = (todo) => {
    todos.push(todo);
    save();
  };

  const create = (todo) => {
    const newTodo = new Todo(
      newID(),
      todo.projectId,
      todo.title,
      todo.description,
      todo.dueDate,
      todo.complete,
      todo.priority,
      todo.notes,
      todo.checklist,
      todo.order,
    );
    add(newTodo);
    return newTodo;
  };

  const update = (updatedTodo) => {
    const index = findIndex(updatedTodo.id);
    if (index !== -1) {
      todos[index] = updatedTodo;
      save();
      return true;
    }
    return false;
  };

  const updateComplete = (id, complete) => {
    const index = findIndex(id);
    if (index !== -1) {
      todos[index].complete = complete;
      save();
      return true;
    }
    return false;
  };

  const load = () => {
    const storage = JSON.parse(localStorage.getItem('todolist-todosDB'));
    if (storage) {
      console.log(storage);
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

  const remove = (id) => {
    const index = findIndex(id);
    if (index !== -1) {
      todos.splice(index, 1);
      save();
      return true;
    }
    return false;
  };

  const projectTodos = (projectId) => {
    if (todos) {
      return todos.filter(todo => todo.projectId === projectId);
    }
    return [];
  };

  const projectRemoved = (projectId) => {
    const todosToDelete = projectTodos(projectId);
    for (let index = 0; index < todosToDelete.length; index += 1) {
      const todo = todosToDelete[index];
      remove(todo.id);
    }
  };

  load();

  return {
    todos,
    length,
    load,
    add,
    create,
    update,
    updateComplete,
    remove,
    newID,
    projectTodos,
    projectRemoved,
  };
});

export default todosDB;
