import { Injectable } from '@angular/core';
import { Sucursal } from '../models/sucursal';
import { DataService } from '../services/data.service';

@Injectable()
export class InventarioService {	
	constructor(private dataService:DataService) { }

	public actualizarInventario(inventario){
		return this.dataService.put('/api/inventarioproducto',{'inventarioProducto':inventario});
	}
}
