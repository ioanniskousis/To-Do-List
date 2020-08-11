import { gel, crel, doc } from './utils';

function renderProjectCaption(indexCallBack, todosView, project) {
  const todosViewCaption = crel('div');
  todosViewCaption.className = 'todosViewCaption';
  if (todosView.offsetTop === 0) {
    gel('projectsSideBar').style.display = 'none';
    todosView.style.display = 'block';
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

  doc(todosView, todosViewCaption);
}

function renderTodos(indexCallBack, todosView, project, todos) {
  const todosTable = crel('div');
  for (let index = 0; index < todos.length; index += 1) {
    const todo = todos[index];
    const par = crel('p');
    par.innerHTML = todo.title;
    doc(todosTable, par);
    par.addEventListener('click', () => {
      indexCallBack('show', [project, todo]);
    });
  }
  doc(todosView, todosTable);
}

function renderBackArrow(todosView) {
  const arrow = crel('div');
  arrow.className = 'arrowLeft';
  arrow.addEventListener('click', () => {
    gel('projectsSideBar').style.display = 'block';
    todosView.style.display = 'none';
  });
  doc(todosView, arrow);
}

function projectDeleted(project) {
  const todosView = gel('todosView');
  const projectId = parseInt(todosView.getAttribute('projectId'), 10);
  if (projectId === project.id) {
    gel('todosView').innerHTML = '';
  }
}

function projectUpdated(project) {
  const todosView = gel('todosView');
  const projectId = parseInt(todosView.getAttribute('projectId'), 10);
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
  const todosView = gel('todosView');
  todosView.innerHTML = '';
  todosView.setAttribute('projectId', project.id);

  renderBackArrow(todosView);

  renderProjectCaption(indexCallBack, todosView, project);
  renderTodos(indexCallBack, todosView, project, todos);
}

export default renderTodosView;
