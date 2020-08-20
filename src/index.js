import './styles.css';
import {Todo, TodoList} from './classes' //index.js por defecto
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js'
// import { TodoList } from './classes/todo.list.class';

const todos = [];

export const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Comprar un unicornio');

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);
console.log(todoList);

crearTodoHtml(tarea);