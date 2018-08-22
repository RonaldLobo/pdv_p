var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    idProducto: { type: String, require: true },
    idSucursal: { type: String, require: true },
    cantidad: { type: Number, require: true },
    estado: { type: Boolean }
}, {
    versionKey: false
});

module.exports = mongoose.model('inventario-producto', schema);
