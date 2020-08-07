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
    this.id = id;
    this.projectId = projectId;
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
