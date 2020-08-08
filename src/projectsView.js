import { crel, doc } from './utils';

function renderProjects(view, projects) {
  projects.forEach(project => {
    const row = crel('div');
    row.className = 'projectRow';

    const id = crel('div');
    const title = crel('div');
    const description = crel('div');
    const dateCreated = crel('div');

    id.textContent = project.id;
    title.textContent = project.title;
    description.textContent = project.description;
    dateCreated.textContent = project.dateCreated;

    doc(view, row);
  });
}

export default renderProjects;
