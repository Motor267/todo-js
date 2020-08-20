export class TodoList {

    constructor(){
        this.todos = [];
    }

    nuevoTodo(todo){
        this.todos.push(todo);
    }

    eliminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id);
        //filtra todos los todo que no tengan el mismo id que el enviado
    }

    marcarCompletado(id){
        for (const todo of this.todos){
            if(todo.id == id){
                todo.coompletado = !todo.coompletado;
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.coompletado);
        //Regresa todos los que no estan completados
    }
}