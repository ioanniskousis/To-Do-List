import Project from './projectClass';

const projectsDB = (() => {
  const projects = [];

  const length = () => projects.length;

  const save = () => {
    localStorage.setItem('todolist-projectsDB', JSON.stringify(projects));
  };

  const newID = () => {
    if (projects.length === 0) {
      return 1;
    }
    return projects[projects.length - 1].id + 1;
  };

  const add = (project) => {
    projects.push(project);
    save();
  };

  const create = (title, description) => {
    // add(new Project(newID(), title, description));
    alert(title + ' ' + description);
  };

  const load = () => {
    const storage = JSON.parse(localStorage.getItem('todolist-projectsDB'));
    if (storage) {
      storage.forEach((project) => {
        projects.push(new Project(
          project.id,
          project.title,
          project.description,
        ));
      });
    }
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

  return {
    projects,
    length,
    load,
    add,
    create,
    remove,
    newID,
  };
});

export default projectsDB;
