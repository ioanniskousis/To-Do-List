// import projectsDB from './projectsDB';
import { gel, crel, doc } from './utils';

function compareProjectDates(a, b) {
  return b.dateCreated - a.dateCreated;
}

function renderProjectsSideBarRow(projectsSideBar, project, indexCallBack) {
  const projectsSideBarRow = crel('div');
  projectsSideBarRow.className = 'projectsSideBarRow';

  const projectRowTitle = crel('div');
  projectRowTitle.className = 'projectRowTitle';
  projectRowTitle.textContent = project.title;
  projectRowTitle.addEventListener('click', () => {
    indexCallBack('show', [project]);
  });
  doc(projectsSideBarRow, projectRowTitle);

  const projectRowEdit = crel('div');
  projectRowEdit.className = 'projectRowEdit';
  projectRowEdit.addEventListener('click', () => {
    indexCallBack('edit', [project]);
  });
  doc(projectsSideBarRow, projectRowEdit);

  doc(projectsSideBar, projectsSideBarRow);
}

function renderProjectsSideBar(indexCallBack, projDB) {
  const projectsSideBar = gel('projectsSideBar');
  projectsSideBar.innerHTML = '';

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

  const projects = projDB.projects.sort(compareProjectDates);
  projects.forEach(project => {
    renderProjectsSideBarRow(projectsSideBar, project, indexCallBack);
  });
}

export default renderProjectsSideBar;
