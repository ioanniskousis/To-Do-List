/* eslint-disable prefer-destructuring */
import Project from './projectClass';

const projectsDB = (() => {
  const projects = [];

  const length = () => projects.length;

  function compareIds(a, b) {
    return a.id - b.id;
  }

  const save = () => {
    localStorage.setItem('todolist-projectsDB', JSON.stringify(projects));
  };

  const newID = () => {
    projects.sort(compareIds);
    if (projects.length === 0) {
      return 1;
    }
    return projects[projects.length - 1].id + 1;
  };

  const add = (project) => {
    projects.push(project);
    save();
  };

  const create = (args) => {
    const title = args[0];
    const description = args[1];
    const priority = args[2];
    const dateCreated = Date.now();
    const project = new Project(newID(), title, description, dateCreated, priority);
    add(project);
    return project;
  };

  const load = () => {
    const storage = JSON.parse(localStorage.getItem('todolist-projectsDB'));
    if (storage) {
      storage.forEach((project) => {
        projects.push(new Project(
          project.id,
          project.title,
          project.description,
          project.dateCreated,
          project.priority,
        ));
      });
    }
  };

  const find = (id) => {
    for (let index = 0; index < projects.length; index += 1) {
      const element = projects[index];
      if (element.id === id) {
        return element;
      }
    }
    return null;
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

  const update = (args) => {
    const index = findIndex(args[0]);
    if (index !== -1) {
      projects[index].title = args[1];
      projects[index].description = args[2];
      projects[index].dateCreated = Date.now();
      projects[index].priority = args[3];
      save();
      return projects[index];
    }
    return null;
  };

  const remove = (id) => {
    const index = findIndex(id);
    if (index !== -1) {
      const project = projects[index];
      projects.splice(index, 1);
      save();
      return project;
    }
    return null;
  };

  load();

  return {
    projects,
    length,
    load,
    add,
    create,
    update,
    remove,
    newID,
    find,
  };
});

export default projectsDB;
