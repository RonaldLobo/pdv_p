'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var InventarioProductosRsrc = require(__base + 'server/infrastructure/resources').inventarioproducto;
var SucursalRsrc = require(__base + 'server/infrastructure/resources').sucursal;
var ProductRsrc = require(__base + 'server/infrastructure/resources').product;

function getInventarioProducto(id) {
    var result;
    console.log('get inventarioProducto by ' + id);
    try {
    	if(id){
        	result = await (InventarioProductosRsrc.getInventarioProducto(id));
        } else {
        	result = await (InventarioProductosRsrc.getInventarioProductos());
        }   
    } catch(error) {
        throw error;
    }
    return { inventarioProducto: result };
}

function updateInventarioProducto(inventarioProducto) {
    var result;
    console.log('update inventarioProducto by ' + inventarioProducto._id);
    try {
        result = await (InventarioProductosRsrc.updateInventarioProducto(inventarioProducto));
    } catch(error) {
        throw error;
    }
    return { inventarioProducto: result };
}

function nuevoProducto(producto) {
    var result;
    console.log('agregar inventarioProductoSucursales by ' + producto._id);
    try {
        var suc = await (SucursalRsrc.getSucursals());
        for (var i = suc.length - 1; i >= 0; i--) {
            console.log({idSucursal:suc[i]._id,idProducto:producto._id,cantidad:0,estado:1});
            var res = await (InventarioProductosRsrc.addInventarioProducto({idSucursal:suc[i]._id,idProducto:producto._id,cantidad:0,estado:1}));
            console.log(res);
        }
    } catch(error) {
        console.log(error);
        throw error;
    }
    return { producto: producto };
}

function nuevaSucursal(sucursal) {
    var result;
    console.log('agregar inventarioProductoSucursales by ' + sucursal._id);
    try {
        var prods = await (ProductRsrc.getProducts());
        for (var i = prods.length - 1; i >= 0; i--) {
            var res = await (InventarioProductosRsrc.addInventarioProducto({idSucursal:sucursal._id,idProducto:prods[i]._id,cantidad:0,estado:1}));
            console.log(res);
        }
    } catch(error) {
        throw error;
    }
    return { sucursal: sucursal };
}

function deleteInventarioProducto(id) {
    var result;
    console.log('delete inventarioProducto by ' + id);
    try {
        result = await (InventarioProductosRsrc.deleteInventarioProducto(id));
    } catch(error) {
        throw error;
    }
    return { inventarioProducto: result };
}

function postInventarioProducto(inventarioProducto) {
    var result;
    console.log('post inventarioProducto');
    try {
        result = await (InventarioProductosRsrc.addInventarioProducto(inventarioProducto));
    } catch(error) {
        throw error;
    }
    return { inventarioProducto: result };
}

module.exports.getInventarioProducto = async(getInventarioProducto);
module.exports.nuevoProducto = async(nuevoProducto);
module.exports.nuevaSucursal = async(nuevaSucursal);
module.exports.updateInventarioProducto = async(updateInventarioProducto);
module.exports.deleteInventarioProducto = async(deleteInventarioProducto);
module.exports.postInventarioProducto = async(postInventarioProducto);