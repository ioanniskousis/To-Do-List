import { gel, crel, doc } from './utils';

function compareProjectDates(a, b) {
  if (a.priority === b.priority) {
    return b.dateCreated - a.dateCreated;
  }
  return b.priority - a.priority;
}

function renderProjectsSideBarRow(projectsSideBarTable, project, indexCallBack) {
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

  doc(projectsSideBarTable, projectsSideBarRow);
  projectsSideBarRow.style.height = '40px';
}

function renderProjectsIndex(indexCallBack, projDB) {
  const projectsSideBarTable = gel('projectsSideBarTable');

  const { projects } = projDB;
  if (projects.length > 0) {
    projectsSideBarTable.innerHTML = '';
    projects.sort(compareProjectDates);
    projects.forEach(project => {
      renderProjectsSideBarRow(projectsSideBarTable, project, indexCallBack);
    });
  }
}

export default renderProjectsIndex;
