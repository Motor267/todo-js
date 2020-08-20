export class Todo{

    constructor (tarea){
        this.tarea = tarea;
        this.id = new Date().getTime(); //12213345
        this.completado = false;
        this.creado = new Date();
    }
}