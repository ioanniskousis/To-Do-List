import {
  gel,
  crel,
  doc,
  maximize,
  minimize,
} from './utils';

function hideInputView(backView) {
  minimize(backView);
  setTimeout(() => { backView.remove(); }, 200);
}

function inputViewKeyPress(backView, e) {
  if (e.keyCode === 27) {
    hideInputView(backView);
  }
}

function renderTitle(backView, containerBody, projectObject) {
  const lab = crel('label');
  lab.textContent = 'Title';
  lab.setAttribute('for', 'projectTitle');
  doc(containerBody, lab);

  const input = crel('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'projectTitle');
  input.setAttribute('autofocus', 'true');
  if (projectObject) input.value = projectObject.title;
  doc(containerBody, input);

  input.addEventListener('keypress', e => {
    inputViewKeyPress(backView, e);
  });
}

function renderDescription(backView, containerBody, projectObject) {
  const lab = crel('label');
  lab.textContent = 'Description';
  lab.setAttribute('for', 'projectDescription');
  doc(containerBody, lab);

  const input = crel('textarea');
  input.setAttribute('id', 'projectDescription');
  if (projectObject) input.value = projectObject.description;
  doc(containerBody, input);

  input.addEventListener('keypress', e => {
    inputViewKeyPress(backView, e);
  });
}

function renderPriority(backView, containerBody, projectObject) {
  const lab = crel('label');
  lab.textContent = 'Priority';
  lab.setAttribute('for', 'projectPriority');
  doc(containerBody, lab);

  const input = crel('input');
  input.setAttribute('type', 'number');
  input.setAttribute('id', 'projectPriority');
  if (projectObject) {
    input.value = projectObject.priority;
  } else {
    input.value = 0;
  }
  doc(containerBody, input);

  input.addEventListener('keypress', e => {
    inputViewKeyPress(backView, e);
  });
}

function renderHeader(inputContainer, obj) {
  const header = crel('div');
  header.className = 'inputContainerHeader bgBrown';
  const caption = crel('h3');
  if (obj) {
    caption.textContent = 'Edit Project';
  } else {
    caption.textContent = 'Define New Project';
  }
  doc(inputContainer, caption);
  doc(header, caption);
  doc(inputContainer, header);
}

function renderBody(backView, inputContainer, obj) {
  const containerBody = crel('div');
  containerBody.className = 'inputContainerBody';

  renderTitle(backView, containerBody, obj);
  renderDescription(backView, containerBody, obj);
  renderPriority(backView, containerBody, obj);

  doc(inputContainer, containerBody);
}

function renderFooter(backView, inputContainer, indexCallBack, saveCallBack, obj) {
  const footer = crel('div');
  footer.className = 'inputContainerFooter bgBrown';

  if (obj) {
    footer.style.justifyContent = 'space-between';
    const deleteButton = crel('div');
    deleteButton.className = 'button delete';
    deleteButton.textContent = 'Delete Project';
    doc(footer, deleteButton);
    deleteButton.addEventListener('click', () => {
      if (confirm('Delete project '.concat(obj.title))) {
        indexCallBack('delete', [obj.id]);
        hideInputView(backView);
      }
    });
  }

  const saveButton = crel('div');
  saveButton.className = 'button save';
  saveButton.textContent = 'Save';
  doc(footer, saveButton);
  saveButton.addEventListener('click', () => {
    const title = gel('projectTitle').value.trim();
    const description = gel('projectDescription').value.trim();
    const priority = parseInt(gel('projectPriority').value.trim(), 10);
    if (saveCallBack(title, description, priority, indexCallBack, obj)) {
      hideInputView(backView);
    }
  });
  doc(inputContainer, footer);
}

function renderInputContainer(backView, indexCallBack, saveCallBack, obj) {
  const inputContainer = crel('div');
  inputContainer.className = 'inputContainer';

  renderHeader(inputContainer, obj);
  renderBody(backView, inputContainer, obj);
  renderFooter(backView, inputContainer, indexCallBack, saveCallBack, obj);

  doc(backView, inputContainer);
}

function renderBackView() {
  const backView = crel('div');
  backView.className = 'backView';
  doc(document.body, backView);
  backView.setAttribute('tabindex', '0');
  backView.addEventListener('keypress', e => {
    inputViewKeyPress(backView, e);
  });
  const closeButton = crel('div');
  closeButton.className = 'closeButton';
  doc(backView, closeButton);
  closeButton.addEventListener('click', () => {
    hideInputView(backView);
  });
  return backView;
}

function renderProjectForm(indexCallBack, saveCallBack, projectObject) {
  const backView = renderBackView();
  renderInputContainer(backView, indexCallBack, saveCallBack, projectObject);
  maximize(backView);
}

export default renderProjectForm;
