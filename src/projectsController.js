import renderProjectForm from './projectForm';
import renderProjectsSideBar from './projectsSideBar';

function saveCallBack(title, description, priority, indexCallBack, projectObject) {
  if (title.length > 0) {
    if (projectObject) {
      indexCallBack('update', [projectObject.id, title, description, priority]);
    } else {
      indexCallBack('create', [title, description, priority]);
    }
  } else {
    alert('Project Title can not be empty');
    return false;
  }
  return true;
}

function newProject(indexCallBack) {
  renderProjectForm(indexCallBack, saveCallBack);
}

function editProject(indexCallBack, projectObject) {
  renderProjectForm(indexCallBack, saveCallBack, projectObject);
}

// function deleteProject() {
//   alert('projectsController: deleteProject');
// }

function viewProjects() {
  alert('projectsController: viewProjects');
}

function projectsHandler(key, indexCallBack, projectObject) {
  switch (key) {
    case 'newProject':
      newProject(indexCallBack);
      break;
    // case 'deleteProject':
    //   deleteProject();
    //   break;
    case 'viewProjects':
      viewProjects();
      break;
    case 'sideBar':
      renderProjectsSideBar(indexCallBack, projectObject);
      break;
    case 'edit':
      editProject(indexCallBack, projectObject);
      break;
    case 'show':
      // editProject();
      break;
    default:
      break;
  }
}

export default projectsHandler;
