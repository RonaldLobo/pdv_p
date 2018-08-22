import { Telefono } from './telefono'
import { Correo } from './correo'

export class Cliente {
	public _id: string = undefined;
	public nombre : string = '';
	public apellido1 : string = '';
	public apellido2 : string = '';
	public cedula : number = 0;
	public telefonos : Telefono[] = [];
	public correo : Correo = new Correo();
	constructor(){
	}
}
