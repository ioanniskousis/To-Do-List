import '../resources/stylesheets/style.css';

function component() {
  const element = document.createElement('h1');
  element.innerHTML = 'To Do List';

  return element;
}

document.body.appendChild(component());