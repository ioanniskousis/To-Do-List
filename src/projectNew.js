/* eslint-disable no-alert */
import {
  gel,
  crel,
  doc,
  maximize,
  minimize,
} from './utils';

function renderTitle(inputContainer) {
  const lab = crel('label');
  lab.textContent = 'Title';
  lab.setAttribute('for', 'projectTitle');
  doc(inputContainer, lab);

  const projectTitle = crel('input');
  projectTitle.setAttribute('type', 'text');
  projectTitle.setAttribute('id', 'projectTitle');
  projectTitle.setAttribute('autofocus', 'true');
  doc(inputContainer, projectTitle);
}

function renderDescription(inputContainer) {
  const lab = crel('label');
  lab.textContent = 'Description';
  lab.setAttribute('for', 'projectDescription');
  doc(inputContainer, lab);

  const projectDescription = crel('textarea');
  projectDescription.setAttribute('id', 'projectDescription');
  doc(inputContainer, projectDescription);
}

function renderInputContainer(backView, projectsCallBack) {
  const inputContainer = crel('div');
  inputContainer.className = 'inputContainer';
  doc(backView, inputContainer);

  const caption = crel('h3');
  caption.textContent = 'Define New Project';
  doc(inputContainer, caption);

  renderTitle(inputContainer);
  renderDescription(inputContainer);

  const saveButton = crel('input');
  saveButton.setAttribute('type', 'button');
  saveButton.value = 'Save';
  doc(inputContainer, saveButton);
  saveButton.addEventListener('click', () => {
    const projectTitle = gel('projectTitle').value;
    if (projectTitle.length > 0) {
      const projectDescription = gel('projectDescription').value;
      projectsCallBack('newProject', [projectTitle, projectDescription]);
      minimize(backView);
      setTimeout(() => { backView.remove(); }, 200);
    } else {
      alert('Title Can\'t be empty');
    }
  });
}

function renderNewProject(projectsCallBack) {
  const backView = crel('div');
  backView.className = 'backView';
  doc(document.body, backView);
  maximize(backView);

  const closeButton = crel('div');
  closeButton.className = 'closeButton';
  doc(backView, closeButton);
  closeButton.addEventListener('click', () => {
    minimize(backView);
    setTimeout(() => { backView.remove(); }, 200);
  });

  renderInputContainer(backView, projectsCallBack);
}

export default renderNewProject;
