import Project from './projectClass';

const projectsList = (() => {
  const projects = [];

  const length = () => {
    return projects.length;
  };

  const add = (project) => {
    projects.push(project);
  };

  const load = () => {
    const storage = JSON.parse(localStorage.getItem('todolist-projects'));
    if (storage) {
      storage.forEach((project) => {
        add(new Project(
          project.id,
          project.title,
          project.description,
        ));
      });
    }
  };

  const save = () => {
    localStorage.setItem('todolist-projects', JSON.stringify(projects));
  };

  const findIndex = (id) => {
    for (let index = 0; index < projects.length; index += 1) {
      const element = projects[index];
      if (element.id === id) {
        return index;
      }
    }
    return -1;
  };

  const remove = (id) => {
    const index = findIndex(id);
    if (index !== -1) {
      projects.splice(index, 1);
      save();
      return true;
    }
    return false;
  };

  const newID = () => {
    if (projects.length === 0) {
      return 1;
    }
    return this.todos[this.todos.length - 1].id + 1;
  };

  return {
    load,
    projects,
    add,
    remove,
    newID,
    length,
  };
});

export default projectsList;
