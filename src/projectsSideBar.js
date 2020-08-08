// import projectsDB from './projectsDB';
import { gel, crel, doc } from './utils';

function renderProjectsSideBar(indexCallBack, projDB) {
  let projectsSideBar = gel('div');
  if (projectsSideBar) {
    projectsSideBar.innerHTML = '';
  } else {
    projectsSideBar = crel('div');
  }
  projectsSideBar.id = 'projectsSideBar';
  projectsSideBar.className = 'projectsSideBar';
  const main = gel('main');
  doc(main, projectsSideBar);

  const { projects } = projDB;
  projects.forEach(project => {
    const projectsSideBarRow = crel('div');
    projectsSideBarRow.className = 'projectsSideBarRow';
    const projectRowTitle = crel('div');
    projectRowTitle.className = 'projectRowTitle';
    projectRowTitle.textContent = project.title;
    const projectRowEdit = crel('div');
    projectRowEdit.className = 'projectRowEdit';
    doc(projectsSideBarRow, projectRowTitle);
    doc(projectsSideBarRow, projectRowEdit);
    doc(projectsSideBar, projectsSideBarRow);

    projectRowTitle.addEventListener('click', () => {
      indexCallBack('show', [project]);
    });
    projectRowEdit.addEventListener('click', () => {
      indexCallBack('edit', [project]);
    });
  });
}

export default renderProjectsSideBar;
