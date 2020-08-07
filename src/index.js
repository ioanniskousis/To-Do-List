import '../resources/stylesheets/style.css';
import './projectsList';

function component() {
  const element = document.createElement('h1');
  element.innerHTML = 'To Do List';

  return element;
}

document.body.appendChild(component());

const projects = projectsList();

alert(projects.length());
