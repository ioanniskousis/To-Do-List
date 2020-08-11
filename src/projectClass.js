class Project {
  constructor(id, title, description, dateCreated, priority = 0) {
    this.id = parseInt(id, 10);
    this.title = title;
    this.description = description;
    this.dateCreated = parseInt(dateCreated, 10);
    this.priority = parseInt(priority, 10);
  }
}

export default Project;
