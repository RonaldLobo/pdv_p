import { Telefono } from './telefono'
import { Correo } from './correo'

export class Usuario {
	public _id: string = undefined;
	public nombreComercial : string = '';
	public provincia : string = '';
	public canton : string = '';
	public distrito : string = '';
	public barrio : string = '';
	public senas : string = '';
	public clienteAPI : string = '';
	public telefonos : Telefono[] = [];
	public correo : Correo = new Correo();
	constructor(){
	}
}
