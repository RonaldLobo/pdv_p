var async = require('asyncawait/async');
var await = require('asyncawait/await');
var inventarioProductoModel = require(__base + 'server/model/inventario-producto');

function getInventarioProductos() {
    var inventarioProductos = await(inventarioProductoModel.find({}));
    return inventarioProductos;
}

function getInventarioProducto(id) {
    var inventarioProducto = await(inventarioProductoModel.findOne({_id:id}));
    return inventarioProducto;
}

function getInventarioProductoBuscar(idProducto,idSucursal) {
    var inventarioProducto = await(inventarioProductoModel.findOne({idSucursal:idSucursal,idProducto:idProducto}));
    return inventarioProducto;
}

function deleteInventarioProducto(id) {
    var inventarioProducto = await(inventarioProductoModel.remove({_id:id}));
    return inventarioProducto;
}

function updateInventarioProducto(inventarioProductoParam) {
    var inventarioProducto = await(inventarioProductoModel.update({idProducto:inventarioProductoParam.idProducto,idSucursal:inventarioProductoParam.idSucursal},inventarioProductoParam));
    return inventarioProducto;
}

function addInventarioProducto(inventarioProductoParam) {
    console.log('adding in here',inventarioProductoParam);
    var inventarioProducto = await(inventarioProductoModel.create(inventarioProductoParam));
    return inventarioProducto;
}

module.exports = {
    getInventarioProductos: async(getInventarioProductos),
    getInventarioProductoBuscar: async(getInventarioProductoBuscar),
    getInventarioProducto: async(getInventarioProducto),
    deleteInventarioProducto: async(deleteInventarioProducto),
    updateInventarioProducto: async(updateInventarioProducto),
    addInventarioProducto: async(addInventarioProducto)
};