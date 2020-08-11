import renderProjectForm from './projectForm';
import renderProjectsIndex from './projectsSideBar';

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

function projectsHandler(key, indexCallBack, projectObject) {
  switch (key) {
    case 'newProject':
      newProject(indexCallBack);
      break;
    case 'index':
      renderProjectsIndex(indexCallBack, projectObject);
      break;
    case 'edit':
      editProject(indexCallBack, projectObject);
      break;
    default:
      break;
  }
}

export default projectsHandler;
