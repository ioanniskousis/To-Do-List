import '../resources/stylesheets/style.css';
import { gel } from './utils';
import projectsDB from './projectsDB';
import todosDB from './totosDB';

// import renderProjects from './projectsView';
import {
  renderMain,
  // renderNavigator,
} from './renderSkeleton';

import projectsHandler from './projectsController';
import todosHandler from './todosController';

// localStorage.removeItem('todolist-projectsDB');
// localStorage.removeItem('todolist-todosDB');
const projDB = projectsDB();
const todos = todosDB();
// projDB.create(['Project Title 01', 'Project Description 01']);
// projDB.create(['Project Title 02', 'Project Description 02']);
// projDB.create(['Project Title 03', 'Project Description 03']);
// projDB.create(['Project Title 04', 'Project Description 04']);

function createTodo(todo, callBack) {
  const project = projDB.find(todo.projectId);
  const projectTodos = todos.projectTodos(todo.projectId);
  todo.order = projectTodos.length + 1;
  const newTodo = todos.create(todo);
  projectTodos.push(newTodo);
  todosHandler('index', callBack, project, projectTodos);
}

function updateTodo(todo, callBack) {
  const project = projDB.find(todo.projectId);
  todos.update(todo);
  const projectTodos = todos.projectTodos(todo.projectId);
  todosHandler('index', callBack, project, projectTodos);
}

functio deleteTodo() {

}

function callBackForTodos(key, args) {
  switch (key) {
    case 'newTodo':
      todosHandler(key, callBackForTodos, args[0]);
      break;
    case 'show':
      todosHandler(key, callBackForTodos, args[0], args[1]);
      break;
    case 'create':
      createTodo(args[0], callBackForTodos);
      break;
    case 'delete':
      alert('callBackForTodos delete : '.args);
      break;
    case 'update':
      updateTodo(args[0], callBackForTodos);
      break;
    default:
      break;
  }
}

function createProject(args, callBack) {
  const project = projDB.create(args);
  projectsHandler('index', callBack, projDB);
  todosHandler('index', callBackForTodos, project, []);
}

function updateProject(args, callBack) {
  const project = projDB.update(args);
  projectsHandler('index', callBack, projDB);
  todosHandler('index', null, project, null, 'updated');
}

function deleteProject(projectId, callBack) {
  const project = projDB.remove(projectId);
  todos.projectRemoved(projectId);
  projectsHandler('index', callBack, projDB);
  todosHandler('index', null, project, null, 'deleted');
}

function showProjectTodos(project, callBack) {
  const projectTodos = todos.projectTodos(project.id);
  todosHandler('index', callBack, project, projectTodos);
}

function callBackForProjects(key, args) {
  switch (key) {
    case 'create':
      createProject(args, callBackForProjects);
      break;
    case 'update':
      updateProject(args, callBackForProjects);
      break;
    case 'edit':
      projectsHandler(key, callBackForProjects, args[0]);
      break;
    case 'delete':
      deleteProject(args[0], callBackForProjects);
      break;
    case 'show':
      showProjectTodos(args[0], callBackForTodos);
      break;
    case 'newProject':
      projectsHandler(key, callBackForProjects);
      break;
    default:
      break;
  }
}

// function callBackForNavigator(key) {
//   switch (key) {
//     case 'newProject':
//     case 'deleteProject':
//     case 'viewProjects':
//       projectsHandler(key, callBackForProjects);
//       break;
//     default:
//       break;
//   }
// }

// renderNavigator(callBackForNavigator);
renderMain();
projectsHandler('index', callBackForProjects, projDB);

function resize() {
  if (window.innerWidth > 768) {
    gel('projectsSideBar').style.display = 'block';
    gel('todosView').style.display = 'block';
  } else {
    gel('projectsSideBar').style.display = 'block';
    gel('todosView').style.display = 'none';
  }
}

window.addEventListener('resize', () => {
  resize();
});

window.addEventListener('load', () => {
  resize();
});

// projDB.load();
// let projectsCount = projects.length;
// div.innerHTML += '<hr/>';

// div.append(projectsCount.toString().concat(' projects'));

// const newProjectId = projDB.newID();

// div.innerHTML += '<br/>';
// div.append('newProjectId = '.concat(newProjectId));

// projDB.add({ id: projDB.newID(), title: 'Project To-Do-List', description: 'Project Description' });

// newProjectId = projDB.newID();

// div.innerHTML += '<hr/>';

// projectsCount = projects.length;
// div.append(projectsCount.toString().concat(' projects'));

// div.innerHTML += '<br/>';
// div.append('newProjectId = '.concat(newProjectId));

// div.innerHTML += '<hr/>';
// div.append(projects[0].title.concat(' - ').concat(projects[0].description));

// const { projects } = projDB;
// renderProjects(div, projects);

// localStorage.removeItem('todolist-projectsDB');

// div.innerHTML += '<hr/>';
// const projectsCount = projects.length;
// div.append(projectsCount.toString().concat(' projects'));