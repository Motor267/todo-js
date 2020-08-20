import '../css/componentes.css';
import { Todo } from '../classes';
import {todoList} from '../index';

//Referencias HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed')

export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${todo.completado ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.completado ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild); //insertar el primer hijo (li)
    
    return div;
}

//Eventos
txtInput.addEventListener('keyup', (event) =>{ //keyup al momento de dejar de presionar la tecla y event te dice cual tecla fue
if(event.keyCode === 13 && txtInput.value.length > 0){
     const nuevoTodo = new Todo(txtInput.value);
     todoList.nuevoTodo(nuevoTodo);

     crearTodoHtml(nuevoTodo);
     txtInput.value = '';
 }
});

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento = event.target.parentElement.parentElement; //se va a cada padre
    const todoId = todoElemento.getAttribute('data-id'); //obitiene el id

    if(nombreElemento.includes('input')){ //Si inclute Input
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if(nombreElemento.includes('button')) { //hay que borrar si es boton
        todoList.eliminarTodo(todoId); //borrado de memoria
        divTodoList.removeChild(todoElemento); //borrar de html  
    } 
});

btnBorrar.addEventListener('click', () =>{
    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length-1; i>=0; i--){
        const elemento = divTodoList.children[i];
        
        //Si contiene la clase completado se elimina
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
});