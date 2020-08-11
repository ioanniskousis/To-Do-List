import { format } from 'date-fns';

import {
  gel,
  gelc,
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

function renderProjectTitle(containerBody, project) {
  const projectLabel = crel('label');
  projectLabel.className = 'todoProjectTitle';
  const strong = crel('strong');
  strong.textContent = 'For Project : ';
  doc(projectLabel, strong);
  projectLabel.append(project.title);

  doc(containerBody, projectLabel);
}

function renderDueDate(todoTools, todo) {
  const dueDate = crel('div');
  dueDate.className = 'dueDate';

  const dueDateLab = crel('label');
  dueDateLab.textContent = 'Duedate';
  dueDateLab.setAttribute('for', 'dueDateInput');
  doc(dueDate, dueDateLab);

  const dueDateInput = crel('input');
  dueDateInput.type = 'text';
  dueDateInput.id = 'dueDateInput';
  if (todo) {
    if (parseInt(todo.dueDate, 10) > 0) {
      const todoDate = todo ? new Date(todo.dueDate) : new Date();
      try {
        dueDateInput.value = format(todoDate, 'MMM dd, yyyy');
      } catch (error) {
        dueDateInput.value = '';
      }
    }
  } else {
    dueDateInput.value = format(new Date(), 'MMM dd, yyyy');
  }

  doc(dueDate, dueDateInput);

  doc(todoTools, dueDate);
}

function renderPriority(todoTools, todo) {
  const todoPriority = crel('div');
  todoPriority.className = 'todoPriority';
  const priorityLab = crel('label');
  priorityLab.textContent = 'Priority';

  doc(todoPriority, priorityLab);
  const priorityBox = crel('div');
  const priority = todo ? todo.priority : 0;
  const priorityClass = selectorClasses()[priority];
  priorityBox.className = 'priorityBox priority-'.concat(priorityClass);
  priorityBox.setAttribute('value', priority);
  priorityBox.id = 'priorityBox';
  todoPriority.addEventListener('click', () => {
    const prioritySelectorContainer = gel('prioritySelectorContainer');
    prioritySelectorContainer.style.left = (todoPriority.offsetLeft).toString().concat('px');
    prioritySelectorContainer.style.top = (todoPriority.offsetTop).toString().concat('px');
    prioritySelectorContainer.style.width = (todoPriority.offsetWidth).toString().concat('px');
    prioritySelectorContainer.style.visibility = 'visible';
  });
  doc(todoPriority, priorityBox);

  doc(todoTools, todoPriority);
}

function renderComplete(todoTools, todo) {
  const todoComplete = crel('div');
  todoComplete.className = 'todoComplete';

  const completeLab = crel('label');
  completeLab.setAttribute('for', 'completeCheck');
  completeLab.textContent = 'Complete';
  doc(todoComplete, completeLab);

  const completeCheck = crel('input');
  completeCheck.type = 'checkbox';
  completeCheck.checked = todo ? todo.complete : false;
  completeLab.className = 'custom-checkbox';
  completeCheck.id = 'completeCheck';
  doc(todoComplete, completeCheck);

  doc(todoTools, todoComplete);
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

function renderSelector(container, index) {
  const selectoClass = selectorClasses()[index];
  const selector = crel('div');
  selector.className = 'prioritySelector priority-'.concat(selectoClass);
  selector.setAttribute('value', index.toString());
  selector.addEventListener('click', () => {
    selectPriority(selector);
  });
  doc(container, selector);
}

function renderPrioritySelector(inputContainer) {
  const prioritySelectorContainer = crel('div');
  prioritySelectorContainer.className = 'prioritySelectorContainer';
  prioritySelectorContainer.id = 'prioritySelectorContainer';

  for (let index = 0; index < 6; index += 1) {
    renderSelector(prioritySelectorContainer, index) ;
  }

  prioritySelectorContainer.addEventListener('mouseleave', () => {
    prioritySelectorContainer.style.visibility = 'hidden';
  });

  doc(inputContainer, prioritySelectorContainer);
}

function renderTools(containerBody, todo) {
  const todoTools = crel('div');
  todoTools.className = 'todoTools';

  renderDueDate(todoTools, todo);
  renderPriority(todoTools, todo);
  renderComplete(todoTools, todo);
  renderPrioritySelector(todoTools);

  doc(containerBody, todoTools);
}

function renderToolBar(containerBody, project, todo) {
  renderProjectTitle(containerBody, project);

  renderTools(containerBody, todo);
}

function renderTitle(backView, inputContainer, todo) {
  const lab = crel('label');
  lab.textContent = 'Title';
  lab.setAttribute('for', 'todoTitle');
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
  lab.setAttribute('for', 'toodNotes');
  doc(inputContainer, lab);

  const input = crel('textarea');
  input.id = 'toodNotes';
  if (todo) input.value = todo.notes;
  doc(inputContainer, input);

  input.addEventListener('keypress', e => {
    inputViewKeyPress(backView, e);
  });
}

function renderCheckItem(checkListContainer, element, index) {
  const checkItem = crel('div');
  checkItem.className = 'checkItem';

  const checkBox = crel('input');
  checkBox.type = 'checkbox';
  checkBox.className = 'checkItemCheck';
  checkBox.checked = element.check;
  doc(checkItem, checkBox);

  const checkDescription = crel('input');
  checkDescription.type = 'text';
  checkDescription.id = 'checkDescription-'.concat(index);
  checkDescription.setAttribute('autocomplete', 'off');
  checkDescription.setAttribute('autocorrect', 'off');
  checkDescription.setAttribute('spellcheck', 'off');
  checkDescription.className = 'checkItemText';
  checkDescription.value = element.description;
  doc(checkItem, checkDescription);

  const deleteButton = crel('div');
  deleteButton.className = 'checkItemDelete';
  deleteButton.addEventListener('click', () => {
    if (confirm('Delete Check : ' + element.description)) {
      checkItem.remove();
    }
  });
  doc(checkItem, deleteButton);

  doc(checkListContainer, checkItem);
  return checkItem;
}

function renderCheckItems(checkListContainer, todo) {
  if (todo) {
    const checkItems = todo.checklist;
    if (checkItems) {
      let index = 1;
      checkItems.forEach(element => {
        renderCheckItem(checkListContainer, element, index);
        index += 1;
      });
    }
  }
}

function newCheckItemId() {
  const checkItems = gelc('checkItem');
  return checkItems.length + 1;
}

function renderCheckList(containerBody, todo) {
  const checkListLabel = crel('label');
  checkListLabel.className = 'checkListLabel';
  checkListLabel.textContent = 'Check List';
  const addButton = crel('div');
  addButton.className = 'addTodoCheckButton';
  doc(checkListLabel, addButton);
  addButton.addEventListener('click', () => {
    const checkId = newCheckItemId();
    const newCheck = { description: 'Check Item '.concat(checkId.toString()), check: false };
    const checkItem = renderCheckItem(gel('checkListContainer'), newCheck, checkId);
    gel('inputContainerBody').scrollTo(0, checkItem.offsetTop);
    const textBox = gel('checkDescription-'.concat(checkId.toString()));
    textBox.focus();
  });

  doc(containerBody, checkListLabel);

  const checkListContainer = crel('div');
  checkListContainer.id = 'checkListContainer';
  doc(containerBody, checkListContainer);

  renderCheckItems(checkListContainer, todo);
}

function renderHeader(inputContainer, obj) {
  const header = crel('div');
  header.className = 'inputContainerHeader bgGreen';
  const caption = crel('h3');
  if (obj) {
    caption.textContent = 'Edit ToDo';
  } else {
    caption.textContent = 'Define New ToDo';
  }
  doc(inputContainer, caption);
  doc(header, caption);
  doc(inputContainer, header);
}

function renderBody(backView, inputContainer, project, todo) {
  const containerBody = crel('div');
  containerBody.className = 'inputContainerBody';
  containerBody.id = 'inputContainerBody';

  renderToolBar(containerBody, project, todo);
  renderTitle(backView, containerBody, todo);
  renderDescription(backView, containerBody, todo);
  renderNotes(backView, containerBody, todo);
  renderCheckList(containerBody, todo);

  doc(inputContainer, containerBody);
}

function todoChecklist() {
  const checkList = [];
  const checkItems = gelc('checkItem');
  if (checkItems.length > 0) {
    for (let index = 0; index < checkItems.length; index += 1) {
      const item = checkItems[index];
      const check = item.getElementsByClassName('checkItemCheck')[0].checked;
      const description = item.getElementsByClassName('checkItemText')[0].value.trim();
      const order = index;
      checkList.push({ description, check, order });
    }
  }
  return checkList;
}

function todoRecord() {
  const id = parseInt(gel('inputContainer').getAttribute('todoId'), 10);
  const projectId = parseInt(gel('inputContainer').getAttribute('projectId'), 10);
  const title = gel('todoTitle').value.trim();
  const description = gel('todoDescription').value.trim();
  const dueDate = Date.parse(gel('dueDateInput').value.trim());
  const complete = gel('completeCheck').checked;
  const priority = gel('priorityBox').getAttribute('value');
  const notes = gel('toodNotes').value.trim();
  const checklist = todoChecklist();
  const order = '0';
  return {
    id,
    projectId,
    title,
    description,
    dueDate,
    complete,
    priority,
    notes,
    checklist,
    order,
  };
}

function renderFooter(backView, inputContainer, indexCallBack, saveCallBack, obj) {
  const footer = crel('div');
  footer.className = 'inputContainerFooter bgGreen';

  if (obj) {
    footer.style.justifyContent = 'space-between';
    const deleteButton = crel('div');
    deleteButton.className = 'button';
    deleteButton.textContent = 'Delete ToDo';
    deleteButton.addEventListener('click', () => {
      if (confirm('Delete ToDo : '.concat(obj.title))) {
        indexCallBack('delete', [obj.id]);
        hideInputView(backView);
      }
    });
    doc(footer, deleteButton);
  }

  const saveButton = crel('div');
  saveButton.className = 'button';
  saveButton.textContent = 'Save';
  doc(footer, saveButton);
  saveButton.addEventListener('click', () => {
    const todoRec = todoRecord(obj);
    if (saveCallBack(indexCallBack, todoRec)) {
      hideInputView(backView);
    }
  });

  doc(inputContainer, footer);
}

function renderInputContainer(backView, indexCallBack, saveCallBack, todo, project) {
  const inputContainer = crel('div');
  inputContainer.className = 'inputContainer';
  inputContainer.id = 'inputContainer';
  inputContainer.setAttribute('projectId', project.id);
  inputContainer.setAttribute('todoId', todo ? todo.id : 0);
  doc(backView, inputContainer);

  renderHeader(inputContainer, todo);
  renderBody(backView, inputContainer, project, todo);
  renderFooter(backView, inputContainer, indexCallBack, saveCallBack, todo);
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

function renderTodoForm(indexCallBack, saveCallBack, todo, project) {
  const backView = renderBackView();
  renderInputContainer(backView, indexCallBack, saveCallBack, todo, project);
  maximize(backView);
}

export default renderTodoForm;