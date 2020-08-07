function gel(id) {
  return document.getElementById(id);
}

function gelc(classname) {
  return document.getElementsByClassName(classname);
}

function crel(type) {
  return document.createElement(type);
}

function doc(container, element) {
  container.appendChild(element);
}

function maximize(element) {
  element.style.left = '0';
  element.style.top = '0';
  element.style.width = '100%';
  element.style.height = '100%';
}

function minimize(element) {
  element.style.left = '50%';
  element.style.top = '50%';
  element.style.width = '0';
  element.style.height = '0';
}

export {
  gel, gelc, crel, doc, maximize, minimize,
};
