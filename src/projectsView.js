function renderProjects(view, projects) {
  projects.forEach(project => {
    view.innerHTML += ' <hr/>';
    let output = project.id.toString();
    output += ' '.concat(project.title);
    output += ' '.concat(project.description);
    view.innerHTML += output;
  });
}

export default renderProjects;
