import '../resources/stylesheets/style.css';
import { gel } from './utils';
import projectsDB from './projectsDB';
// import renderProjects from './projectsView';
import {
  renderMain,
  // renderNavigator,
} from './renderSkeleton';

import projectsHandler from './projectsController';
import todosHandler from './todosController';

// localStorage.removeItem('todolist-projectsDB');
const projDB = projectsDB();
// projDB.create(['Project Title 01', 'Project Description 01']);
// projDB.create(['Project Title 02', 'Project Description 02']);
// projDB.create(['Project Title 03', 'Project Description 03']);
// projDB.create(['Project Title 04', 'Project Description 04']);

function callBackForTodos(key, args) {
  switch (key) {
    case 'newTodo':
      todosHandler(key, callBackForTodos, args[0]);
      break;
    case 'create':
      alert('create Todo for : ' + args[0].title);
      break;
    default:
      break;
  }
}

function callBackForProjects(key, args) {
  switch (key) {
    case 'create': {
      projDB.create(args);
      projectsHandler('sideBar', callBackForProjects, projDB);
      break;
    }
    case 'update': {
      projDB.update(args);
      projectsHandler('sideBar', callBackForProjects, projDB);
      break;
    }
    case 'edit': {
      projectsHandler(key, callBackForProjects, args[0]);
      break;
    }
    case 'delete': {
      projDB.remove(args[0]);
      projectsHandler('sideBar', callBackForProjects, projDB);
      break;
    }
    case 'show': {
      todosHandler(key, callBackForTodos, args[0]);
      break;
    }
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
projectsHandler('sideBar', callBackForProjects, projDB);

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