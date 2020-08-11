import '../resources/stylesheets/style.css';
import { gel } from './utils';
import projectsDB from './projectsDB';
import todosDB from './totosDB';
import renderMain from './renderSkeleton';
import projectsHandler from './projectsController';
import todosHandler from './todosController';
import seed from './seed';

/* FOR REVIEWING THE APPLICATION ONLY WITH INITIAL SAMPLE DATA UNCOMMENT THE FOLLOWING 2 LINES */
// localStorage.removeItem('todolist-projectsDB');
// localStorage.removeItem('todolist-todosDB');

const projDB = projectsDB();
const todos = todosDB();

/* function seed() ENABLES REVIEWING THE APPLICATION WITH INITIAL SAMPLE DATA */
if (projDB.length() === 0) seed(projDB, todos);

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

function deleteTodo(id) {
  todos.remove(id);
  todosHandler('delete', null, null, id);
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
      deleteTodo(args[0]);
      break;
    case 'update':
      updateTodo(args[0], callBackForTodos);
      break;
    case 'updateComplete':
      todos.updateComplete(args[0].id, args[1]);
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
