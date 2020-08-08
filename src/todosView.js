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
  projectTitle.style.color = 'brown';
  projectTitle.textContent = project.title;
  doc(todosViewCaption, projectTitle);

  const projectDescription = crel('div');
  projectDescription.className = 'projectRowTitle';
  projectDescription.textContent = project.description;
  doc(todosViewCaption, projectDescription);

  const addTodoButton = crel('div');
  addTodoButton.className = 'addTodoButton';
  doc(todosViewCaption, addTodoButton);
  addTodoButton.addEventListener('click', () => {
    indexCallBack('create', [project]);
  });

  doc(todosView, todosViewCaption);
}

function renderTodos(indexCallBack, project) {
  const todosView = gel('todosView');
  todosView.innerHTML = '';

  const arrow = crel('div');
  arrow.className = 'arrowLeft';
  arrow.addEventListener('click', () => {
    gel('projectsSideBar').style.display = 'block';
    todosView.style.display = 'none';
  });
  doc(todosView, arrow);

  renderProjectCaption(indexCallBack, todosView, project);
  // alert('display ' + todosView.style.display);

  // const visible = todosView.style.display === null;
  // if (!visible) {
  //   alert('todosView display none - ' + todosView.style.display);

  // } else {

  //   alert(todosView.style.display + ' ' + project.title);
  // }
}

export default renderTodos;
