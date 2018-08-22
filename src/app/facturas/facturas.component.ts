import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../models/producto';
import { Factura } from '../models/factura';
import { Cliente } from '../models/cliente';

import { Productofacturaitem } from '../models/productofacturaitem';
import { ProductosService } from '../services/productos.service';
import { FacturaService } from '../services/factura.service';
import { ClientesService } from '../services/clientes.service';
import { AuthService } from '../services/auth.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { DecimalPipe } from '@angular/common';

import * as _ from 'lodash';

import * as jsPDF from 'jspdf'


@Component({
	selector: 'app-facturas',
	templateUrl: './facturas.component.html',
	styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
	public clientes : Cliente[];
	public codigo:string = '';
	public copy: Producto = new Producto();
	public nombreProducto:string = '';
	public nombreCliente: string = '';
	public cedulaCliente: number;
	public productos : Producto[] = [];
	public agotados = [];
	public buscando: boolean = false;
	public factura: Factura = new Factura();
	public total = 0;
	modalRef: BsModalRef;
	modalRefAgregar: BsModalRef;
	modalRefCompletar: BsModalRef;
	printRefCompletar: BsModalRef;
	agotadosRefCompletar: BsModalRef;
	id: string = '';
	errorDisplay: string = '';
	private sub: any;
	public guardado : boolean = false;

	constructor(private productosService:ProductosService, 
		private facturaService:FacturaService, 
		private modalService: BsModalService,
		private clientesService:ClientesService,
		private route: ActivatedRoute,
		private decimalPipe:DecimalPipe,
		private authService:AuthService,
		private router:Router) { }

	ngOnInit() {
		document.getElementById("buscarPorCodigo").focus();
		this.sub = this.route.params.subscribe(params => {
	       this.id = params['id'];
	       console.log(this.id);
	       if(this.id != undefined){
		       this.facturaService.obtenerFacturasId(this.id).subscribe((data) => {
					console.log(data);
					this.factura = data.productBill;
					this.actualizaTotal();
				}, fail => {
				});
		    }
	    });
	}

	changedCodigo = _.debounce(function() {
		if(this.codigo.length > 2){
			this.buscando = true;
			this.productosService.obtenerProductosFiltroCodigo(this.codigo).subscribe((data) => {
				if(data.product.length > 1){
					this.productos = data.product;
				} else if(data.product.length == 1) {
					this.seleccionarProd(data.product[0])
				} else {

				}
			}, fail => {
			});
		}
	}, 400);

	changedNombre = _.debounce(function() {
		if(this.nombreProducto.length > 2){
			this.buscando = true;
			this.productosService.obtenerProductosFiltroNombre(this.nombreProducto).subscribe((data) => {
				this.productos = data.product;
			}, fail => {
			});
		}
	}, 400);

	seleccionarProd(prod){
		if(prod.cantidad >= 1){
			var pfi = new Productofacturaitem();
			pfi.producto = prod;
			pfi.cantidad = 1;
			pfi.descuento = prod.descuento;
			pfi.descuento_tipo = prod.descuento_tipo;
			this.factura.productos.unshift(pfi);
			this.actualizaTotal();
			this.productos = [];
			this.nombreProducto = '';
			this.codigo = '';
			document.getElementById("buscarPorCodigo").focus();
		} else {
			alert('El producto se encuentra agotado.');
		}
	}

	eliminarProd(index){
		this.factura.productos.splice(index,1);
		this.actualizaTotal();
	}

	actualizaTotal(){
		var total = 0;
		for (var i = this.factura.productos.length - 1; i >= 0; i--) {
			var productoPrecio = this.factura.productos[i].producto.precio;
			if(this.factura.productos[i].descuento > 0){
				if(this.factura.productos[i].descuento_tipo == 1){
					productoPrecio -= this.factura.productos[i].descuento;
				} else {
					productoPrecio -= (productoPrecio * (this.factura.productos[i].descuento * 0.01));
				}
			}
			total += productoPrecio * this.factura.productos[i].cantidad;
		}
		if(total > 0){
			if(this.factura.descuento > 0){
				if(this.factura.descuento_tipo == 1){
					total -= this.factura.descuento;
				} else {
					total -= (total * (this.factura.descuento * 0.01));
				}
			}
		}
		if(total < 0){
			alert('Por favor revise los datos');
		}
		this.total = total;
	}

	editarFactura(param){
		this.actualizaTotal();
	}

	fueraDescuento(){
	    if(this.factura.descuento == null || isNaN(this.factura.descuento)){
	    	this.factura.descuento = 0;
	    }
	    this.actualizaTotal();
	}

	confirmar(template){
		console.log(this.factura);
		this.openModalCompletar(template);
	}

	guardar(estado = 'pendiente',template){
		if(this.factura.vendedor.nombre == ''){
			this.factura.vendedor = this.authService.loggedUser;
		}
		var that = this;
		if(this.total > 0){
			this.factura.idSucursal = this.authService.loggedUser.idSucursal;
			if(this.id == undefined){
				this.factura.estado = estado;
				var that = this;
				this.facturaService.agregarFactura(this.factura)
				.then((data) => {
					console.log('success');
					console.log(data);
					if(data.productBill.error){
						// alert(data.productBill.error);
						that.agotados = data.productBill.productos;
						that.openModalAgotados(template);
					} else {
						that.guardado = true;
						setTimeout(function(argument) {
							that.guardado = false;
						}, 2000);
						that.router.navigate(['/vender/'+data.productBill._id]);
					}
				}, fail => {
					console.log('fail');
					console.log(fail);
				});
			} else {
				this.factura.estado = estado;
				this.facturaService.editarFactura(this.factura)
				.then((data) => {
					console.log(data);
					if(data.productBill.error){
						this.factura.estado = 'pendiente';
						// alert(data.productBill.error);
						that.agotados = data.productBill.productos;
						that.openModalAgotados(template);
					} else {
						that.guardado = true;
						setTimeout(function(argument) {
							that.guardado = false;
						}, 2000);
					}
				}, fail => {
					console.log('fail');
					console.log(fail);
				});
			}
		}
	}

	seleccionarCliente(template: TemplateRef<any>){
		this.obtenerClientes();
		this.openModal(template);
	}

	public obtenerClientes(){
		this.clientesService.obtenerClientes().subscribe((data) => {
				console.log('clientes',this.clientes);
				this.clientes = data.client;
			},(error)=>{
				console.log('error',error);
			});
	}


	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}

	openModalAgregar(template: TemplateRef<any>) {
		this.modalRefAgregar = this.modalService.show(template);
	}

	openModalCompletar(template: TemplateRef<any>) {
		this.modalRefCompletar = this.modalService.show(template);
	}

	openModalPrint(template: TemplateRef<any>) {
		this.printRefCompletar = this.modalService.show(template);
	}

	openModalAgotados(template: TemplateRef<any>) {
		this.agotadosRefCompletar = this.modalService.show(template);
	}

	seleccionarClient(client){
		this.factura.comprador = client;
		this.nombreCliente = '';
		this.cedulaCliente = 0;
		if(this.modalRef){
			this.modalRef.hide();
		}
		if(this.modalRefAgregar){
			this.modalRefAgregar.hide();
		}
	}

	changedNombreCliente = _.debounce(function() {
		if(this.nombreCliente.length > 2){
			this.buscando = true;
			this.clientesService.obtenerClientesFiltroNombre(this.nombreCliente).subscribe((data) => {
				this.clientes = data.client;
			}, fail => {
			});
		}
	}, 400);

	changedCedula = _.debounce(function() {
		if(this.cedulaCliente.length > 2){
			this.buscando = true;
			this.clientesService.obtenerClientesFiltroCedula(this.cedulaCliente).subscribe((data) => {
				this.clientes = data.client;
			}, fail => {
			});
		}
	}, 400);

	actualizarListaClientes(){
		this.obtenerClientes();
		this.clientesService.obtenerClientes().subscribe((data) => {
			console.log('clientes',this.clientes);
			this.clientes = data.client;
			this.nombreCliente = '';
			this.cedulaCliente = 0;
			if(this.clientes.length > 0){
				this.seleccionarClient(this.clientes[this.clientes.length -1])
			}
		},(error)=>{
			console.log('error',error);
		});
	}

	completarFactura(temp){
		// this.factura.estado = 'completa';
		this.guardar('completa',temp);
		this.modalRefCompletar.hide();
	}

	paseDate(date){
		var dd = date.getDate();
		var mm = date.getMonth()+1; //January is 0!

		var yyyy = date.getFullYear();
		if(dd<10){
		    dd='0'+dd;
		} 
		if(mm<10){
		    mm='0'+mm;
		} 
		var parsed = dd+'/'+mm+'/'+yyyy;
		return parsed;
	}

	truncate(str, limit) {
	    var bits, i;
	    bits = str.split('');
	    if (bits.length > limit) {
	        for (i = bits.length - 1; i > -1; --i) {
	            if (i > limit) {
	                bits.length = i;
	            }
	            else if (' ' === bits[i]) {
	                bits.length = i;
	                break;
	            }
	        }
	        bits.push('...');
	    }
	    return bits.join('');
	}

	imprimir(tipo){
		console.log('imprimir',tipo,this.factura.productos.length);
		var doc;
		var that = this;
		if(tipo == 'A4'){

			var img = new Image();
			img.addEventListener('load', function() {
				// header
				var pags = Math.ceil(that.factura.productos.length / 32);
				doc = new jsPDF('p','pt','letter');
				// var i = 0;
				// console.log('j',j,pags);
				var j = 0;
				var o,f,temparray,chunk = 32;
				for (o=0,f=that.factura.productos.length; o<f; o+=chunk) {
					temparray = that.factura.productos.slice(o,o+chunk);
					console.log(temparray);
				// for (var j = 0 ; j < pags; j++) {
					console.log('looped',i,pags);
					doc.setFont("helvetica");
					doc.setFontType("bold");
					doc.setFontSize("12");
					doc.text('Factura Empresa', 100, 20);
					doc.setFont("helvetica");
					doc.setFontType("normal");
					doc.setFontSize("8");
					doc.text('San Ramón, Alajuela', 100, 35);
					doc.text('Tel. 87051854', 100, 45);
					doc.text('ronald.lb2@gmail.com', 100, 55);
					doc.text('kyr.com', 100, 65);
					img.width = 80;
					img.height = 80;
				    doc.addImage(img, 'png', 25, 10);
				    // fin header
				    // numero factura
				    doc.setFont("helvetica");
					doc.setFontType("bold");
					doc.setFontSize("12");
				    doc.text('Factura No', 25, 120);
				    doc.text('100', 100, 120);
				    doc.text('Fecha', 25, 140);
				    doc.text(that.paseDate(new Date(that.factura.fecha_modificada)), 100, 140);
				    // fin numero factura
				    // cliente 
				    // doc.setFillColor(191,191,191);
					doc.rect(300, 100, 250, 58);
					doc.text('Cliente', 310, 115);
				    doc.setFont("helvetica");
					doc.setFontType("normal");
					doc.setFontSize("10");
				    doc.text('Nombre', 310, 130);
				    if(that.factura.comprador.nombre != ''){
				    	doc.text(that.factura.comprador.nombre + ' ' +
				    			that.factura.comprador.apellido1 + ' ' +
				    			that.factura.comprador.apellido2, 380, 130);
				    	doc.text('Cedula', 310, 145);
				    	doc.text(''+that.factura.comprador.cedula, 380, 145);
				    } else {
				    	doc.text('Factura sin cliente', 380, 130);
				    }
				    // fin cliente
				    // tabla productos
				    doc.rect(25, 200, 560, 430);
				    doc.setFillColor(191,191,191);
				    doc.rect(26, 201, 558, 13, 'F');
				    var x = 26, y = 214;
				    for(var i=0; i<32;i++){
				    	if(i % 2 == 0){
				    		doc.setFillColor(204,217,255);
				    	} else {
				    		doc.setFillColor(255,255,255);
				    	}
				    	doc.rect(x, y, 558, 13, 'F');
				    	y += 13;
				    }
				    doc.setDrawColor(255,255,255);
				    doc.setLineWidth(1.5);
					doc.line(100, 200, 100, 700);
					doc.line(280, 200, 280, 700);
					doc.line(330, 200, 330, 700);
					doc.line(400, 200, 400, 700);
					doc.line(480, 200, 480, 700);
				    doc.setFontSize("8");
				    doc.text('Código', 47, 210);
				    doc.text('Producto', 200, 210);
				    doc.text('Cantidad', 290, 210);
				    doc.text('Descuento', 345, 210);
				    doc.text('Precio und', 420, 210);
				    doc.text('Precio', 520, 210);
				    // fin tabla productos
				    // agregar productos
				    y = 223;
					for (var i = temparray.length - 1; i >= 0; i--) {
						doc.text(''+temparray[i].producto.codigo, 70, y, 'right');
						if(temparray[i].producto.codigo != '0000'){
							var text = ''+temparray[i].producto.nombre+' '+temparray[i].producto.marca;
							doc.text(that.truncate(text,50), 130, y);
						} else {
							doc.text(''+temparray[i].producto.nombre, 130, y);
						}
						doc.text(''+temparray[i].cantidad, 310, y, 'right');
						doc.text(that.toDecimals(that.descuentoPorProducto(temparray[i])), 380, y, 'right');
						doc.text(that.toDecimals(temparray[i].producto.precio), 460, y, 'right');
						doc.text(that.toDecimals(temparray[i].producto.precio * temparray[i].cantidad), 550, y, 'right');
						y += 13;
					}
				    // fin agregar productos
				    // total
				    doc.setFontSize("10");
					doc.setFontType("bold");
				    doc.text('Total Bruto', 400, 670);
				    doc.setFontType("normal");
				    doc.text(that.toDecimals(that.totalBruto()), 560, 670, 'right');
				    doc.text('Descuento', 400, 690);
				    doc.text(that.toDecimals(that.totalDescuento()), 560, 690, 'right');
				    doc.text('Total Neto', 400, 710);
				    doc.text(that.toDecimals(that.totalNeto()), 560, 710, 'right');
				    doc.text('Impuestos', 400, 730);
				    doc.text(that.toDecimals(that.totalImpuestos()), 560, 730, 'right');
				    doc.setFontSize("11");
					doc.setFontType("bold");
				    doc.text('Total Factura', 400, 750);
				    doc.text(that.toDecimals(that.totalGlobal()), 560, 750, 'right');
				    doc.text('Pag. '+(j+1)+' de '+ pags, 540, 15);
				    if(j < pags - 1){
				    	doc.addPage();
				    }
				    j++;
				}
			    // fin total
			    that.printDoc(doc);
			});
			img.src = '/assets/kyr.jpg';
		} else {
			var height = 60;
			height += that.factura.productos.length * 4;
			doc = new jsPDF('p','mm',[60,height]);
			doc.setFontSize("10");
			doc.setFontType("bold");
			doc.text('KyR', 30, 8,"center");
			doc.setFontSize("7");
			doc.setFontType("normal");
			doc.text('San Ramón, Alajuela', 30, 12,"center");
			doc.text('8705-1854', 30, 16,"center");
			doc.text('ronald.lb2@gmail.com', 30, 20,"center");
			doc.text('kyr.com', 30, 24,"center");
			doc.text('206780037', 30, 28,"center");
			doc.text('Vendedor:', 7, 32,"left");
			doc.text(that.factura.vendedor.nombre+' '+that.factura.vendedor.apellido1, 30, 32,"left");
			//display products

			var y = 39;
			for (var i = that.factura.productos.length - 1; i >= 0; i--) {
				if(that.factura.productos[i].producto.codigo != '0000'){
					var text = ''+that.factura.productos[i].producto.nombre+' '+that.factura.productos[i].producto.marca;
					doc.text(that.truncate(text,14), 7, y,'left');
				} else {
					doc.text(''+that.factura.productos[i].producto.nombre, 7, y,'left');
				}
				doc.text(''+that.factura.productos[i].producto.codigo, 30, y, 'left');
				doc.text(that.toDecimals(that.factura.productos[i].producto.precio * that.factura.productos[i].cantidad), 50, y, 'right');
				y += 4;
			}
			// end display
			// total
			doc.text('-------------------------------------------------------------', 30, y,"center");
			doc.text('Total Neto: ', 35, y+4,"right");
			doc.text(that.toDecimals(that.totalNeto()), 50, y+4,"right");
			doc.text('Total Impuestos: ', 35, y+8,"right");
			doc.text(that.toDecimals(that.totalImpuestos()), 50, y+8,"right");
			doc.text('Total: ', 35,y+12,"right");
			doc.text(that.toDecimals(that.totalGlobal()), 50, y+12,"right");
			// fin total
			doc.setFontSize("8");
			doc.text('Muchas Gracias', 30,y+19,"center");
			that.printDoc(doc);
			// doc.save('pdv.pdf')
		}
	}

	printDoc(doc){
		var blob = doc.output("blob");
    	window.open(URL.createObjectURL(blob));
    	// var link = document.createElement('a');
     //    link.href = window.URL.createObjectURL(blob);
     //    link.setAttribute('download', 'factura');
     //    document.body.appendChild(link);    
     //    link.click();
     //    document.body.removeChild(link);   
	}



	descuentoPorProducto(productoItem){
		var totalDescuento = 0;
		if(productoItem.descuento_tipo == 1) {
			totalDescuento += productoItem.descuento * productoItem.cantidad;
		} else {
			totalDescuento += (productoItem.producto.precio * productoItem.cantidad) *  (productoItem.descuento * 0.01);
		}
		return totalDescuento;
	}

	totalBruto(){
		var totalBruto = 0;
		for (var i = this.factura.productos.length - 1; i >= 0; i--) {
			totalBruto += (this.factura.productos[i].producto.precio * this.factura.productos[i].cantidad);
		}
		return totalBruto;
	}

	totalDescuento(){
		var totalDescuento = 0;
		for (var i = this.factura.productos.length - 1; i >= 0; i--) {
			if(this.factura.productos[i].descuento_tipo == 1) {
				totalDescuento += this.factura.productos[i].descuento * this.factura.productos[i].cantidad;
			} else {
				totalDescuento += (this.factura.productos[i].producto.precio * this.factura.productos[i].cantidad) *  (this.factura.productos[i].descuento * 0.01);
			}
		}
		if(this.factura.descuento_tipo == 1) {
			totalDescuento += this.factura.descuento;
		} else {
			totalDescuento += this.totalBruto() *  (this.factura.descuento * 0.01);
		}
		return totalDescuento;
	}

	totalNeto(){
		return this.totalBruto() - this.totalDescuento();
	}

	// 1131 = x - (x * 0.13).       1131 = 1300 - ( 1300 * 0.13)
	// 1131 = x - x * 0.13.       1131 = 1300 - 1300 * 0.13
	// 1131 = x - 0.13x 
	// 1131 = 0.87x
	// 1131/0.87 = x 							 



	// 1131 = x - 0.13x


	totalImpuestos(){
		var imp = 0;
		for (var i = this.factura.productos.length - 1; i >= 0; i--) {
			if(this.factura.productos[i].producto.impuestos && this.factura.productos[i].producto.impuestos != 0){
				imp += (this.factura.productos[i].producto.precio * this.factura.productos[i].cantidad) * this.factura.productos[i].producto.impuestos / 100;
			}
		}
		return imp;
	}

	totalGlobal(){
		// console.log(this.totalImpuestos(),this.totalNeto() * 0.13);
		this.factura.total = this.totalNeto() + this.totalImpuestos();
		return this.totalNeto() + this.totalImpuestos();
	}

	dottedLine(doc, xFrom, yFrom, xTo, yTo, segmentLength)
	{
	    // Calculate line length (c)
	    var a = Math.abs(xTo - xFrom);
	    var b = Math.abs(yTo - yFrom);
	    var c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

	    // Make sure we have an odd number of line segments (drawn or blank)
	    // to fit it nicely
	    var fractions = c / segmentLength;
	    var adjustedSegmentLength = (Math.floor(fractions) % 2 === 0) ? (c / Math.ceil(fractions)) : (c / Math.floor(fractions));

	    // Calculate x, y deltas per segment
	    var deltaX = adjustedSegmentLength * (a / c);
	    var deltaY = adjustedSegmentLength * (b / c);

	    var curX = xFrom, curY = yFrom;
	    while (curX <= xTo && curY <= yTo)
	    {
	        doc.line(curX, curY, curX + deltaX, curY + deltaY);
	        curX += 2*deltaX;
	        curY += 2*deltaY;
	    }
	}

	toDecimals(num){
		return this.decimalPipe.transform(num,'1.2-2');
	}


}
