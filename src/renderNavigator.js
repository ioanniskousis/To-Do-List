import { crel } from './utils';

function renderNewProjectButton(container, navigatorCallBack) {
  const newProjectButton = crel('input');
  newProjectButton.setAttribute('type', 'button');
  newProjectButton.setAttribute('value', 'New Project');
  container.appendChild(newProjectButton);
  newProjectButton.addEventListener('click', () => {
    navigatorCallBack('newProject');
  });
}

function renderViewProjectsButton(container, navigatorCallBack) {
  const newProjectButton = crel('input');
  newProjectButton.setAttribute('type', 'button');
  newProjectButton.setAttribute('value', 'All Projects');
  container.appendChild(newProjectButton);
  newProjectButton.addEventListener('click', () => {
    navigatorCallBack('viewProjects');
  });
}

function renderNavigator(container, navigatorCallBack) {
  renderNewProjectButton(container, navigatorCallBack);
  renderViewProjectsButton(container, navigatorCallBack);
}

export default renderNavigator;
