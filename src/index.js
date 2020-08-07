import '../resources/stylesheets/style.css';
import projectsDB from './projectsDB';
import renderProjects from './projectsView';
import renderNavigator from './renderNavigator';
import projectsHandler from './projectsController';

const projDB = projectsDB();

function projectsCallBack(key, args) {
  switch (key) {
    case 'newProject':
      projDB.create(args[0], args[1]);
      break;
    default:
      break;
  }
}

function navigatorCallBack(key) {
  switch (key) {
    case 'newProject':
    case 'deleteProject':
    case 'viewProjects':
      projectsHandler(key, projectsCallBack);
      break;
    default:
      break;
  }
}

function component() {
  const element = document.createElement('div');
  element.style.fontSize = '32px';
  element.style.padding = '20px';
  element.style.backgroundColor = '#ccc';
  // element.innerHTML = 'To Do List';

  return element;
}

const div = component();

document.body.appendChild(div);
renderNavigator(div, navigatorCallBack);



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