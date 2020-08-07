import renderNewProject from './projectNew';

function newProject(projectsCallBack) {
  renderNewProject(projectsCallBack);
}

function deleteProject() {
  alert('deleteProject');
}

function viewProjects() {
  alert('viewProjects');
}

function projectsHandler(key, projectsCallBack) {
  switch (key) {
    case 'newProject':
      newProject(projectsCallBack);
      break;
    case 'deleteProject':
      deleteProject();
      break;
    case 'viewProjects':
      viewProjects();
      break;
    default:
      break;
  }
}

export default projectsHandler;
