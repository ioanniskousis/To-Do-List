class Project {
  constructor(id, title, description, dateCreated, priority = 0) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dateCreated = dateCreated;
    this.priority = priority;
  }
}

export default Project;
