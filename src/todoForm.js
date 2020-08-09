import { format } from 'date-fns';

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

function selectorClasses() {
  return ['gray', 'blue', 'red', 'green', 'orange', 'cyan'];
}

function renderToolBar(inputContainer, project, todo) {
  const inputContainerToolBar = crel('div');
  inputContainerToolBar.className = 'inputContainerToolBar';
  doc(inputContainer, inputContainerToolBar);

  const projectLabel = crel('label');
  const strong = crel('strong');
  strong.textContent = 'For Project : ';
  doc(projectLabel, strong);
  projectLabel.append(project.title);

  doc(inputContainerToolBar, projectLabel);

  const todoTools = crel('div');
  todoTools.className = 'todoTools';

  const dueDate = crel('div');
  dueDate.className = 'dueDate';
  const dueDateLab = crel('label');
  dueDateLab.textContent = 'Duedate';
  dueDateLab.setAttribute('for', 'dueDateInput');
  doc(dueDate, dueDateLab);

  const dueDateInput = crel('input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'dueDateInput';
  const todoDate = new Date();
  dueDateInput.value = todoDate;
  dueDateInput.value = format(todoDate, 'MMM dd, yyyy');
  doc(dueDate, dueDateInput);

  const todoComplete = crel('div');
  todoComplete.className = 'todoComplete';
  const completeLab = crel('label');
  completeLab.setAttribute('for', 'completeCheck');
  completeLab.textContent = 'Complete';
  doc(todoComplete, completeLab);
  const completeCheck = crel('input');
  completeCheck.type = 'checkbox';
  completeLab.className = 'custom-checkbox';
  completeCheck.id = 'completeCheck';
  doc(todoComplete, completeCheck);

  const todoPriority = crel('div');
  todoPriority.className = 'todoPriority';
  const priorityLab = crel('label');
  priorityLab.textContent = 'Priority';
  doc(todoPriority, priorityLab);
  const priorityBox = crel('div');
  priorityBox.className = 'priorityBox priority-gray';
  priorityBox.setAttribute('value', '0');
  priorityBox.id = 'priorityBox';
  todoPriority.addEventListener('click', () => {
    const prioritySelectorContainer = gel('prioritySelectorContainer');
    prioritySelectorContainer.style.left = (todoPriority.offsetLeft).toString().concat('px');
    prioritySelectorContainer.style.top = (todoPriority.offsetTop).toString().concat('px');
    prioritySelectorContainer.style.visibility = 'visible';
    
  });
  doc(todoPriority, priorityBox);

  doc(todoTools, dueDate);
  doc(todoTools, todoPriority);
  doc(todoTools, todoComplete);

  doc(inputContainerToolBar, todoTools);
}

function renderTitle(backView, inputContainer, todo) {
  const lab = crel('label');
  lab.textContent = 'Title';
  lab.setAttribute('for', 'todoTitle');
  lab.style.margin = '15px 20px 13px 20px';
  doc(inputContainer, lab);

  const input = crel('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'todoTitle');
  input.setAttribute('autofocus', 'true');
  if (todo) input.value = todo.title;
  doc(inputContainer, input);

  input.addEventListener('keypress', e => {
    inputViewKeyPress(backView, e);
  });
}

function renderDescription(backView, inputContainer, todo) {
  const lab = crel('label');
  lab.textContent = 'Description';
  lab.setAttribute('for', 'todoDescription');
  doc(inputContainer, lab);

  const input = crel('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'todoDescription');
  if (todo) input.value = todo.description;
  doc(inputContainer, input);

  input.addEventListener('keypress', e => {
    inputViewKeyPress(backView, e);
  });
}

function renderNotes(backView, inputContainer, todo) {
  const lab = crel('label');
  lab.textContent = 'Notes';
  lab.setAttribute('for', 'projectNotes');
  doc(inputContainer, lab);

  const input = crel('textarea');
  input.setAttribute('id', 'projectNotes');
  if (todo) input.value = todo.notes;
  doc(inputContainer, input);

  input.addEventListener('keypress', e => {
    inputViewKeyPress(backView, e);
  });
}

function selectPriority(selector) {
  gel('prioritySelectorContainer').style.visibility = 'hidden';
  const selectorValue = selector.getAttribute('value');
  const index = parseInt(selectorValue, 10);
  const priorityClass = selectorClasses()[index];
  const priorityBox = gel('priorityBox');
  priorityBox.className = 'priorityBox priority-'.concat(priorityClass);
  priorityBox.setAttribute('value', selectorValue);
}

function renderPrioritySelector(inputContainer) {
  const prioritySelectorContainer = crel('div');
  prioritySelectorContainer.className = 'prioritySelectorContainer';
  prioritySelectorContainer.id = 'prioritySelectorContainer';

  const selectorGray = crel('div');
  selectorGray.className = 'prioritySelector priority-gray';
  selectorGray.setAttribute('value', '0');
  selectorGray.addEventListener('click', () => {
    selectPriority(selectorGray);
  });
  doc(prioritySelectorContainer, selectorGray);

  const selectorBlue = crel('div');
  selectorBlue.className = 'prioritySelector priority-blue';
  selectorBlue.setAttribute('value', '1');
  selectorBlue.addEventListener('click', () => {
    selectPriority(selectorBlue);
  });
  doc(prioritySelectorContainer, selectorBlue);

  const selectorRed = crel('div');
  selectorRed.className = 'prioritySelector priority-red';
  selectorRed.setAttribute('value', '2');
  selectorRed.addEventListener('click', () => {
    selectPriority(selectorRed);
  });
  doc(prioritySelectorContainer, selectorRed);

  const selectorGreen = crel('div');
  selectorGreen.className = 'prioritySelector priority-green';
  selectorGreen.setAttribute('value', '3');
  selectorGreen.addEventListener('click', () => {
    selectPriority(selectorGreen);
  });
  doc(prioritySelectorContainer, selectorGreen);

  const selectorOrange = crel('div');
  selectorOrange.className = 'prioritySelector priority-orange';
  selectorOrange.setAttribute('value', '4');
  selectorOrange.addEventListener('click', () => {
    selectPriority(selectorOrange);
  });
  doc(prioritySelectorContainer, selectorOrange);

  const selectorCyan = crel('div');
  selectorCyan.className = 'prioritySelector priority-cyan';
  selectorCyan.setAttribute('value', '5');
  selectorCyan.addEventListener('click', () => {
    selectPriority(selectorCyan);
  });
  doc(prioritySelectorContainer, selectorCyan);

  prioritySelectorContainer.addEventListener('mouseleave', () => {
    prioritySelectorContainer.style.visibility = 'hidden';
  });

  doc(inputContainer, prioritySelectorContainer);
}

function renderCheckItem(checkListContainer, element) {
  const checkItem = crel('div');
  checkItem.className = 'checkItem';
  const checkBox = crel('input');
  checkBox.type = 'checkbox';
  checkBox.checked = element.check;
  doc(checkItem, checkBox);

  const checkDescription = crel('input');
  checkDescription.type = 'text';
  checkDescription.value = element.description;
  doc(checkItem, checkDescription);

  const deleteButton = crel('div');
  deleteButton.className = 'deleteCheckItem';
  doc(checkItem, deleteButton);

  doc(checkListContainer, checkItem);
}

function renderCheckItems(checkListContainer, todo) {
  if (todo) {
    const checkItems = todo.checklist;
    if (checkItems) {
      checkItems.forEach(element => {
        renderCheckItem(checkListContainer, element);
      });
    }
  }
}

function renderCheckList(inputContainerFlexRight, todo) {
  const checkListLabel = crel('label');
  checkListLabel.className = 'checkListLabel';
  checkListLabel.textContent = 'Check List';
  const addButton = crel('div');
  addButton.className = 'addTodoCheckButton';
  addButton.addEventListener('click', () => {
    const newCheck = { description: 'install npx', check: true };
    renderCheckItem(gel('checkListContainer'), newCheck);
  });
  doc(checkListLabel, addButton);
  doc(inputContainerFlexRight, checkListLabel);

  const checkListContainer = crel('div');
  checkListContainer.id = 'checkListContainer';
  renderCheckItems(checkListContainer, todo);
  doc(inputContainerFlexRight, checkListContainer);
}

function renderCaption(inputContainer, todo) {
  const caption = crel('h3');
  caption.style.margin = '0';
  caption.className = 'bgGreen';
  if (todo) {
    caption.textContent = 'Edit ToDo';
  } else {
    caption.textContent = 'Define New ToDo';
  }
  doc(inputContainer, caption);
}

function renderLeftContainer(backView, inputContainerFlex, todo) {
  const inputContainerFlexLeft = crel('div');
  inputContainerFlexLeft.className = 'inputContainerFlexItem';
  // inputContainerFlexLeft.style.borderRight = '1px solid brown';
  renderTitle(backView, inputContainerFlexLeft, todo);
  renderDescription(backView, inputContainerFlexLeft, todo);
  renderNotes(backView, inputContainerFlexLeft, todo);
  doc(inputContainerFlex, inputContainerFlexLeft);
}

function renderRightontainer(inputContainerFlex, todo) {
  const inputContainerFlexRight = crel('div');
  inputContainerFlexRight.className = 'inputContainerFlexItem';

  renderCheckList(inputContainerFlexRight, todo);

  doc(inputContainerFlex, inputContainerFlexRight);
}

function renderFlex(backView, inputContainer, todo) {
  const inputContainerFlex = crel('div');
  inputContainerFlex.className = 'inputContainerFlex';

  renderLeftContainer(backView, inputContainerFlex, todo);
  renderRightontainer(inputContainerFlex, todo);

  doc(inputContainer, inputContainerFlex);
}

function renderButtons(backView, inputContainer, indexCallBack, saveCallBack, todo) {
  const saveButton = crel('div');
  saveButton.className = 'button save';
  saveButton.textContent = 'Save';
  doc(inputContainer, saveButton);
  saveButton.addEventListener('click', () => {
    const title = gel('todoTitle').value.trim();
    const description = gel('todoDescription').value.trim();
    const priority = parseInt(gel('todoPriority').value.trim(), 10);
    if (saveCallBack(title, description, priority, indexCallBack, todo)) {
      hideInputView(backView);
    }
  });
  if (todo) {
    const deleteButton = crel('div');
    deleteButton.className = 'button delete';
    deleteButton.textContent = 'Delete ToDo';
    doc(inputContainer, deleteButton);
    deleteButton.addEventListener('click', () => {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Delete ToDo '.concat(todo.title))) {
        indexCallBack('delete', [todo.id]);
        hideInputView(backView);
      }
    });
  }
}

function renderInputContainer(backView, indexCallBack, saveCallBack, todo, project) {
  const inputContainer = crel('div');
  inputContainer.className = 'inputContainer inputContainerTodo';
  doc(backView, inputContainer);

  renderCaption(inputContainer, todo);

  renderToolBar(inputContainer, project, todo);

  renderFlex(backView, inputContainer, todo);

  renderButtons(backView, inputContainer, indexCallBack, saveCallBack, todo);

  renderPrioritySelector(inputContainer);
}

function renderTodoForm(indexCallBack, saveCallBack, todo, project) {
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

  renderInputContainer(backView, indexCallBack, saveCallBack, todo, project);
  maximize(backView);
}

export default renderTodoForm;