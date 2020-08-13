import {
  crel,
  doc,
} from './utils';

function renderSideBar(indexCallBack, main) {
  const projectsSideBar = crel('div');
  projectsSideBar.id = 'projectsSideBar';
  projectsSideBar.className = 'projectsSideBar';
  doc(main, projectsSideBar);

  const projectsSideBarHeader = crel('div');
  projectsSideBarHeader.className = 'projectsSideBarHeader';

  const projectsSideBarCaption = crel('div');
  projectsSideBarCaption.className = ' projectsSideBarCaption';
  projectsSideBarCaption.textContent = 'Projects';
  doc(projectsSideBarHeader, projectsSideBarCaption);

  const addProjectButton = crel('div');
  addProjectButton.className = 'addProjectButton';
  doc(projectsSideBarHeader, addProjectButton);
  addProjectButton.addEventListener('click', () => {
    indexCallBack('newProject');
  });

  doc(projectsSideBar, projectsSideBarHeader);

  const projectsSideBarTable = crel('div');
  projectsSideBarTable.className = 'projectsSideBarTable';
  projectsSideBarTable.id = 'projectsSideBarTable';

  const projectsPlaceHolder = crel('div');
  projectsPlaceHolder.className = 'viewPlaceHolder';
  projectsPlaceHolder.textContent = 'Create a New Project';
  doc(projectsSideBarTable, projectsPlaceHolder);

  doc(projectsSideBar, projectsSideBarTable);
}

function renderToDosMain(main) {
  const todosView = crel('div');
  todosView.id = 'todosView';
  todosView.className = 'todosView';

  const todosHeader = crel('div');
  todosHeader.className = 'todosHeader';
  todosHeader.textContent = 'To Do List';
  doc(todosView, todosHeader);

  const todosViewBody = crel('div');
  todosViewBody.className = 'todosViewBody';
  todosViewBody.id = 'todosViewBody';

  const todosViewPlaceHolder = crel('div');
  todosViewPlaceHolder.className = 'viewPlaceHolder';
  todosViewPlaceHolder.textContent = 'Create a New Project or Select One From the Left Side Bar';
  doc(todosViewBody, todosViewPlaceHolder);

  doc(todosView, todosViewBody);

  doc(main, todosView);
}

function renderMain(indexCallBack) {
  const main = crel('main');
  main.id = 'main';

  renderSideBar(indexCallBack, main);
  renderToDosMain(main);

  doc(document.body, main);

  return main;
}

export default renderMain;
