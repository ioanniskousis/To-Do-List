class Todo {
  constructor(
    id,
    projectId,
    title,
    description,
    dueDate,
    complete,
    priority,
    notes,
    checklist = [],
    order,
  ) {
    this.id = parseInt(id, 10);
    this.projectId = parseInt(projectId, 10);
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.complete = complete;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.order = order;
  }
}

export default Todo;
