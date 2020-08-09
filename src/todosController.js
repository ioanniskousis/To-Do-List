import renderTodoForm from './todoForm';
import renderTodos from './todosView';

function saveCallBack(title, description, priority, indexCallBack, todoObject) {
  if (title.length > 0) {
    if (todoObject) {
      indexCallBack('update', [todoObject.id, title, description, priority]);
    } else {
      indexCallBack('create', [title, description, priority]);
    }
  } else {
    alert('Todo Title can not be empty');
    return false;
  }
  return true;
}

function newTodo(indexCallBack, todo, project) {
  renderTodoForm(indexCallBack, saveCallBack, todo, project);
}

function editTodo(indexCallBack, todo, project) {
  renderTodoForm(indexCallBack, saveCallBack, todo, project);
}

function todosHandler(key, indexCallBack, project, todo) {
  switch (key) {
    case 'newTodo':
      newTodo(indexCallBack, todo, project);
      break;
    // // case 'deleteProject':
    // //   deleteProject();
    // //   break;
    // case 'viewProjects':
    //   viewProjects();
    //   break;
    // case 'sideBar':
    //   renderProjectsSideBar(indexCallBack, projectObject);
    //   break;
    case 'edit':
      editTodo(indexCallBack, todo, project);
      break;
    case 'show':
      renderTodos(indexCallBack, project, todo);
      break;
    default:
      break;
  }
}

export default todosHandler;
