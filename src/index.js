import Project from "./Project";
import Todo from "./Todo";
import renderProjects from "./renderProjects";

let projects = [new Project("General"), new Project("Work")];
projects[0].addTodo(new Todo("Wash Dishes"));

renderProjects(projects);
