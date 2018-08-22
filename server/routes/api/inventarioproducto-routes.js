'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getInventarioProductos(request, response) {
    console.log('GET inventarioProducto',request.params.id);
    var result;
    try {
        result = await (service.inventarioProductoService.getInventarioProducto(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
    	console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteInventarioProductos(request, response) {
    console.log('DELETE inventarioProducto');
    var result;
    try {
        result = await (service.inventarioProductoService.deleteInventarioProducto(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateInventarioProductos(request, response) {
    console.log('UPDATE inventarioProducto');
    var result;
    try {
        result = await (service.inventarioProductoService.updateInventarioProducto(request.body.inventarioProducto));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postInventarioProductos(request, response) {
    console.log('POST inventarioProducto');
    var result;
    try {
        result = await (service.inventarioProductoService.postInventarioProducto(request.body.inventarioProducto));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getInventarioProductos));
routes.get('/', async(getInventarioProductos));
routes.delete('/:id', async(deleteInventarioProductos));
routes.put('/', async(updateInventarioProductos));
routes.post('/', async(postInventarioProductos));

module.exports = routes;