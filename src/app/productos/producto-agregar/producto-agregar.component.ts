import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../services/productos.service';
import { InventarioService } from '../../services/inventario.service';
import { AuthService } from '../../services/auth.service';
 
@Component({
	selector: 'app-producto-agregar',
	templateUrl: './producto-agregar.component.html',
	styleUrls: ['./producto-agregar.component.css']
})
export class ProductoAgregarComponent implements OnInit, OnChanges {
	@Output() agregarProducto = new EventEmitter<any>();
	@Output() editarProducto = new EventEmitter<any>();
	@Output() close = new EventEmitter<any>();
	@Input() canAdd : boolean = true;
	@Input() action : string = "ver";
	@Input('selectedProduct') producto : Producto = new Producto();
	submitted = false;
	requiredText : string = 'producto';
	isEditing = false;
	errorDisplay = "";
	ivi = false;


	constructor(private productosService:ProductosService, public authService:AuthService, private inventarioService:InventarioService) { }

	ngOnInit() {
	}


	onSubmit(productoForm) {
		console.log('producto');
		console.log(this.producto);
		this.errorDisplay = '';
		this.producto.idSucursal = this.authService.loggedUser.idSucursal;
		if(this.action === "agregar"){
			// if(!this.ivi) this.producto.precio -= this.producto.precio * 0.13;
			this.productosService.agregarProducto(this.producto)
			.then(success =>{
				console.log('agregado',success);
				this.close.emit();
			}, fail => {
				var body = JSON.parse(fail._body);
				console.log(body);
				if(body.code == "11000"){
					this.errorDisplay = "Por favor seleccione otro codigo";
				}
				console.log('fallo',fail);
			});
		}
		if(this.action === "editar"){
			if(this.authService.loggedUser.rol == 1){
				this.productosService.editarProducto(this.producto)
				.then(success =>{
					console.log('editado',success);
					this.close.emit();
				}, fail => {
					var body = JSON.parse(fail._body);
					console.log(body);
					if(body.code == "11000"){
						this.errorDisplay = "Por favor seleccione otro codigo";
					}
					console.log('fallo',fail);
					console.log('fallo',fail);
				});
			} else {
				console.log('actualizar inv',this.authService.loggedUser.idSucursal);
				this.inventarioService.actualizarInventario({
					idSucursal:this.authService.loggedUser.idSucursal,
					idProducto:this.producto._id,
					estado: 1,
					cantidad: this.producto.cantidad
				})
			}
		}
	}

	ngOnChanges(changes){
		// console.log('changes',changes)
		// if(changes.producto && changes.producto.currentValue._id){
		// 	console.log('is editing');
		// 	this.isEditing = true;
		// }
	}

	newProducto(){
		this.submitted = false; 
		this.isEditing = false;
		this.producto = new Producto();
	}

	eliminar(){
		this.productosService.borrarProducto(this.producto)
			.then(success =>{
				console.log('borrado',success);
				this.close.emit();
			}, fail => {
				console.log('fallo',fail);
			});
	}

}
