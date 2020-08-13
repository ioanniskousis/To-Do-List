import { format } from 'date-fns';
import { gel, crel, doc } from './utils';

function renderProjectCaption(indexCallBack, todosViewBody, project) {
  const todosViewCaption = crel('div');
  todosViewCaption.className = 'todosViewCaption';
  const todosView = gel('todosView');
  if (todosView.offsetTop === 0) {
    todosView.style.display = 'block';
    gel('projectsSideBar').style.display = 'none';
  }

  const projectTitle = crel('div');
  projectTitle.className = 'projectRowTitle';
  projectTitle.id = 'todosProjectTitle';
  projectTitle.style.color = 'brown';
  projectTitle.textContent = project.title;
  doc(todosViewCaption, projectTitle);

  const projectDescription = crel('div');
  projectDescription.className = 'projectRowTitle';
  projectDescription.id = 'todosProjectDescription';
  projectDescription.textContent = project.description;
  doc(todosViewCaption, projectDescription);

  const addTodoButton = crel('div');
  addTodoButton.className = 'addTodoButton';
  doc(todosViewCaption, addTodoButton);
  addTodoButton.addEventListener('click', () => {
    indexCallBack('newTodo', [project]);
  });

  doc(todosViewBody, todosViewCaption);
}

function renderTodos(indexCallBack, todosViewBody, project, todos) {
  const todosTable = crel('div');
  todosTable.className = 'todosTable';
  const selectorClasses = ['gray', 'blue', 'red', 'green', 'orange', 'cyan'];
  for (let index = 0; index < todos.length; index += 1) {
    const todo = todos[index];

    const todoPanel = crel('todoPanel');
    todoPanel.className = 'todoPanel';
    todoPanel.id = 'todoPanel-'.concat(todo.id);

    const priorityBox = crel('div');
    const { priority } = todo;
    const priorityClass = selectorClasses[priority];
    priorityBox.className = 'priorityBox priority-'.concat(priorityClass);
    doc(todoPanel, priorityBox);

    const title = crel('div');
    title.className = 'todoPanelTitle';
    title.innerHTML = todo.title;
    title.addEventListener('click', () => {
      indexCallBack('show', [project, todo]);
    });
    doc(todoPanel, title);

    const dueDate = crel('div');
    dueDate.className = 'todoPanelDueDate';
    if (parseInt(todo.dueDate, 10) > 0) {
      try {
        dueDate.innerHTML = format(todo.dueDate, 'MMM dd, yyyy');
      } catch (error) {
        dueDate.innerHTML = '';
      }
    } else {
      dueDate.style.color = '#ddd';
      dueDate.innerHTML = 'no date';
    }
    doc(todoPanel, dueDate);

    const completeCheck = crel('input');
    completeCheck.type = 'checkbox';
    completeCheck.className = 'todoPanelComplete';
    completeCheck.checked = todo.complete;
    completeCheck.addEventListener('click', () => {
      indexCallBack('updateComplete', [todo, completeCheck.checked]);
    });
    doc(todoPanel, completeCheck);

    doc(todosTable, todoPanel);
  }
  doc(todosViewBody, todosTable);
}

function renderBackArrow(todosViewBody) {
  const arrow = crel('div');
  arrow.className = 'arrowLeft';
  arrow.addEventListener('click', () => {
    gel('projectsSideBar').style.display = 'block';
    todosViewBody.style.display = 'none';
  });
  doc(todosViewBody, arrow);
}

function projectDeleted(project) {
  const todosViewBody = gel('todosViewBody');
  const projectId = parseInt(todosViewBody.getAttribute('projectId'), 10);
  if (projectId === project.id) {
    gel('todosViewBody').innerHTML = '';
  }
}

function projectUpdated(project) {
  const todosViewBody = gel('todosViewBody');
  const projectId = parseInt(todosViewBody.getAttribute('projectId'), 10);
  if (projectId === project.id) {
    gel('todosProjectTitle').textContent = project.title;
    gel('todosProjectDescription').textContent = project.description;
  }
}

function renderTodosView(indexCallBack, project, todos, update) {
  if (update === 'updated') {
    projectUpdated(project);
    return;
  }
  if (update === 'deleted') {
    projectDeleted(project);
    return;
  }
  const todosViewBody = gel('todosViewBody');
  todosViewBody.innerHTML = '';
  todosViewBody.setAttribute('projectId', project.id);

  const todosView = gel('todosView');
  renderBackArrow(todosView);

  renderProjectCaption(indexCallBack, todosViewBody, project);
  renderTodos(indexCallBack, todosViewBody, project, todos);
}

export default renderTodosView;
