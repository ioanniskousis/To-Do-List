import renderTodos from './todosView';

function todosHandler(key, indexCallBack, obj) {
  switch (key) {
    // case 'newProject':
    //   newProject(indexCallBack);
    //   break;
    // // case 'deleteProject':
    // //   deleteProject();
    // //   break;
    // case 'viewProjects':
    //   viewProjects();
    //   break;
    // case 'sideBar':
    //   renderProjectsSideBar(indexCallBack, projectObject);
    //   break;
    // case 'edit':
    //   editProject(indexCallBack, projectObject);
    //   break;
    case 'show':
      renderTodos(indexCallBack, obj);
      break;
    default:
      break;
  }
}

export default todosHandler;
