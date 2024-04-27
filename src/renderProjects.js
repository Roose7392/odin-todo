export default function renderProjects(projects) {
  if (projects.length === 0) {
    document.body.textContent = "The project list is empty. Add one";
    return;
  }

  projects.forEach((project) => {
    const projectWrapper = document.createElement("div");
    const projectName = document.createElement("h3");
    const todosList = document.createElement("ul");
    projectName.textContent = project.name;
    project.todos.forEach((todo) => {
      const todoListElement = document.createElement("li");
      todoListElement.textContent = todo.title;
      todosList.appendChild(todoListElement);
    });
    projectWrapper.appendChild(projectName);
    projectWrapper.appendChild(todosList);
    document.body.appendChild(projectWrapper);
  });
}
