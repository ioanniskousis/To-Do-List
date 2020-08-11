import renderTodoForm from './todoForm';
import renderTodosView from './todosView';
import { gel } from './utils';

function saveCallBack(indexCallBack, todoObject) {
  // alert(JSON.stringify(todoObject));
  // return false;
  if (todoObject.title.length > 0) {
    if (todoObject.id > 0) {
      indexCallBack('update', [todoObject]);
    } else {
      indexCallBack('create', [todoObject]);
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

function showTodo(indexCallBack, todo, project) {
  renderTodoForm(indexCallBack, saveCallBack, todo, project);
}

function todosHandler(key, indexCallBack, project, todo, update) {
  switch (key) {
    case 'newTodo':
      newTodo(indexCallBack, todo, project);
      break;
    case 'show':
      showTodo(indexCallBack, todo, project);
      break;
    case 'delete': {
      gel('todoPanel-'.concat(todo)).remove();
      break;
    }
    case 'index':
      renderTodosView(indexCallBack, project, todo, update);
      break;
    default:
      break;
  }
}

export default todosHandler;
