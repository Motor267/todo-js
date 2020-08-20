export class TodoList {

    constructor(){
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id);
        //filtra todos los todo que no tengan el mismo id que el enviado
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for (const todo of this.todos){
            if(todo.id == id){
                todo.coompletado = !todo.coompletado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.coompletado);
        //Regresa todos los que no estan completados
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        // if(localStorage.getItem('todo')){
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        // }else{
        //     this.todos = [];
        // }
        this.todos = (localStorage.getItem('todo')) ? 
            JSON.parse(localStorage.getItem('todo')): 
            this.todos = [];
    }
}