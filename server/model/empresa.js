var mongoose = require('mongoose');
var emailModel = require('./email');
var phoneModel = require('./phone');
var phoneSchema = phoneModel.schema;
var emailSchema = emailModel.schema;

var schema = new mongoose.Schema({
    nombreComercial: { type: String, require: true },
    provincia: { type: String },
    canton: { type: String },
    distrito: { type: String },
    barrio: { type: String },
    senas: { type: String },
    telefonos: [phoneSchema],
    correo: emailSchema,
    clienteAPI:{ type: String }
},{ 
	versionKey: false 
});

module.exports = mongoose.model('empresa', schema);
