
export class Persona{
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    telefono: number;

    constructor(nombre: string, apellido: string, edad: number, curp: string,telefono:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.correo=curp;
        this.telefono=telefono
    }
}