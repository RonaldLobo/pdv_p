import { Component, OnInit, AfterViewInit, TemplateRef } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.service';
import { AuthService } from '../services/auth.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
	selector: 'app-productos',
	templateUrl: './productos.component.html',
	styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, AfterViewInit {
	public productos : Producto[];
	p: number = 1;
	public selectedProduct : Producto = new Producto;
	public loading : boolean = false;
	public action: string = 'agregar';
	public order : string = 'nombre';
	public reverse : boolean = false;
	modalRef: BsModalRef;

	constructor(private productosService: ProductosService,private modalService: BsModalService, public authService:AuthService) { }

	ngOnInit() {
		this.obtenerProductos();
	}

	public editarProducto(producto){
		console.log('edit',producto);
		this.selectedProduct = Object.assign({}, producto);
	}

	public editarProductoSave(producto){
		this.productosService.editarProducto(producto.producto)
			.then(data => {
				this.obtenerProductos();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public borrarProducto(producto){
		this.productosService.borrarProducto(producto)
			.then(data => {
				this.obtenerProductos();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public obtenerProductos(){
		this.productosService.obtenerProductos().subscribe((data) => {
				this.productos = data.product;
				this.orderBy(this.order);
			},(error)=>{
				console.log('error',error);
			});
	}

	public agregarProducto(producto:any){
		this.loading = true;
		this.productosService.agregarProducto(producto.producto)
			.then(data => {
				console.log('producto agregado');
				producto.form.reset();
				this.loading = false;
				this.obtenerProductos();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}

	agregar(template: TemplateRef<any>){
		this.action = "agregar";
		this.openModal(template);
	}

	actualizarLista(){
		this.obtenerProductos();
	}

	ngAfterViewInit(){
		// console.timeEnd();
	}

	orderBy(by){
		this.order = by;
		this.productos = this.sortByKey(this.productos,by);
		if(this.reverse){
			this.productos.reverse();
		}
		this.reverse = !this.reverse;
	}

	sortByKey(array, key) {
	    return array.sort(function(a, b) {
	        var x = a[key]; 
	        var y = b[key];
	        if(key.indexOf('.') != -1){
	        	x = a[key.split('.')[0]][key.split('.')[1]]; 
	        	y = b[key.split('.')[0]][key.split('.')[1]];
	        }
	        console.log(key,'key',x,y);
	        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	    });
	}
}
