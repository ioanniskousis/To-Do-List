import {
  crel,
  doc,
} from './utils';

function renderMain() {
  const main = crel('main');
  main.id = 'main';

  const projectsSideBar = crel('div');
  projectsSideBar.id = 'projectsSideBar';
  projectsSideBar.className = 'projectsSideBar';

  const todosView = crel('div');
  todosView.id = 'todosView';
  todosView.className = 'todosView';

  doc(main, projectsSideBar);
  doc(main, todosView);
  doc(document.body, main);
  return main;
}

function renderNewProjectButton(container, navigatorCallBack) {
  const button = crel('div');
  button.className = 'button';
  button.textContent = 'New Project';
  doc(container, button);
  button.addEventListener('click', () => {
    navigatorCallBack('newProject');
  });
}

function renderViewProjectsButton(container, navigatorCallBack) {
  const button = crel('div');
  button.className = 'button';
  button.textContent = 'All Projects';
  doc(container, button);
  button.addEventListener('click', () => {
    navigatorCallBack('viewProjects');
  });
}

function renderNavigator(navigatorCallBack) {
  const topBar = crel('div');
  topBar.className = 'topBar';
  doc(document.body, topBar);

  renderNewProjectButton(topBar, navigatorCallBack);
  renderViewProjectsButton(topBar, navigatorCallBack);
}

export {
  renderMain,
  renderNavigator,
};
