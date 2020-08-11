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

export default renderMain;
