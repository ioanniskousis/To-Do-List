/* eslint-disable no-alert */
import {
  gel,
  crel,
  doc,
  maximize,
  minimize,
} from './utils';

function hideProjectNew(backView) {
  minimize(backView);
  setTimeout(() => { backView.remove(); }, 200);
}

function projectNewInputKeyPress(backView, e) {
  if (e.keyCode === 27) {
    hideProjectNew(backView);
  }
}

function renderTitle(backView, inputContainer, projectObject) {
  const lab = crel('label');
  lab.textContent = 'Title';
  lab.setAttribute('for', 'projectTitle');
  doc(inputContainer, lab);

  const input = crel('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'projectTitle');
  input.setAttribute('autofocus', 'true');
  if (projectObject) input.value = projectObject.title;
  doc(inputContainer, input);

  input.addEventListener('keypress', e => {
    projectNewInputKeyPress(backView, e);
  });
}

function renderDescription(backView, inputContainer, projectObject) {
  const lab = crel('label');
  lab.textContent = 'Description';
  lab.setAttribute('for', 'projectDescription');
  doc(inputContainer, lab);

  const input = crel('textarea');
  input.setAttribute('id', 'projectDescription');
  if (projectObject) input.value = projectObject.description;
  doc(inputContainer, input);

  input.addEventListener('keypress', e => {
    projectNewInputKeyPress(backView, e);
  });
}

function renderPriority(backView, inputContainer, projectObject) {
  const lab = crel('label');
  lab.textContent = 'Priority';
  lab.setAttribute('for', 'projectPriority');
  doc(inputContainer, lab);

  const input = crel('input');
  input.setAttribute('type', 'number');
  input.setAttribute('id', 'projectPriority');
  if (projectObject) {
    input.value = projectObject.priority;
  } else {
    input.value = 0;
  }
  doc(inputContainer, input);

  input.addEventListener('keypress', e => {
    projectNewInputKeyPress(backView, e);
  });
}

function renderInputContainer(backView, indexCallBack, saveCallBack, projectObject) {
  const inputContainer = crel('div');
  inputContainer.className = 'inputContainer';
  doc(backView, inputContainer);

  const caption = crel('h3');
  if (projectObject) {
    caption.textContent = 'Edit Project';
  } else {
    caption.textContent = 'Define New Project';
  }
  doc(inputContainer, caption);

  renderTitle(backView, inputContainer, projectObject);
  renderDescription(backView, inputContainer, projectObject);
  renderPriority(backView, inputContainer, projectObject);

  const saveButton = crel('div');
  saveButton.className = 'button save';
  saveButton.textContent = 'Save';
  doc(inputContainer, saveButton);
  saveButton.addEventListener('click', () => {
    const title = gel('projectTitle').value.trim();
    const description = gel('projectDescription').value.trim();
    const priority = parseInt(gel('projectPriority').value.trim(), 10);
    if (saveCallBack(title, description, priority, indexCallBack, projectObject)) {
      hideProjectNew(backView);
    }
  });
  if (projectObject) {
    const deleteButton = crel('div');
    deleteButton.className = 'button delete';
    deleteButton.textContent = 'Delete Project';
    doc(inputContainer, deleteButton);
    deleteButton.addEventListener('click', () => {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Delete project '.concat(projectObject.title))) {
        indexCallBack('delete', [projectObject.id]);
        hideProjectNew(backView);
      }
    });
  }
}

function renderProjectForm(indexCallBack, saveCallBack, projectObject) {
  const backView = crel('div');
  backView.className = 'backView';
  doc(document.body, backView);
  backView.setAttribute('tabindex', '0');
  backView.addEventListener('keypress', e => {
    projectNewInputKeyPress(backView, e);
  });

  const closeButton = crel('div');
  closeButton.className = 'closeButton';
  doc(backView, closeButton);
  closeButton.addEventListener('click', () => {
    hideProjectNew(backView);
  });

  renderInputContainer(backView, indexCallBack, saveCallBack, projectObject);
  maximize(backView);
}

export default renderProjectForm;
