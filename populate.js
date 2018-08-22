var mongoose = require('mongoose');
var await = require('asyncawait/await');
var async = require('asyncawait/async');
mongoose.connect('mongodb://localhost:27017/pdv_puertas', {
    connectTimeoutMS: 1000
});
var db = mongoose.connection;


db.on('error',function (error) {
    console.log('CONNECTION ERROR:',error);
});
//Output - 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting 
db.once('open',function () {
    console.log('Connected to mongodb');
});

var empresaModel = require('./server/model/empresa');
var sucursalModel = require('./server/model/sucursal');
var userModel = require('./server/model/user');

// var personSchema = Schema({
//   name: String,
//   age: Number,
//   cars: [{ type: Schema.Types.ObjectId, ref: 'Car' }]
// });

// var carSchema = Schema({
//   brand: String,
//   plate: String,
//   color: String
// });

// var Car = mongoose.model('Car', carSchema);
// var Person = mongoose.model('Person', personSchema);


async function add(argument) {
	var empresa = await(empresaModel.create({
			nombreComercial:'KyR Apps',
			provincia:'2',
			canton:'02',
			distrito:'01',
			barrio:'01',
			senas:'Lugar de oficina',
			telefonos:[{
				telefono:'87051854',
				estado: 1
			}],
			correo:{correo:'kyr.apps.17@gmail.com', estado: 1},
			clienteAPI:'5b79d789cd22f43682adeada' 
		}));

	var sucursal = await(sucursalModel.create({
		nombre:'Sucursal Heredia',
		provincia:'3',
		canton:'01',
		distrito:'01',
		senas:'Lugar de oficina',
		idEmpresa:empresa._id,
		telefonos:[{
			telefono:'87051854',
			estado: 1
		}],
		correo:{correo:'kyr.apps.17@gmail.com', estado: 1}
	}));

	var usuario = await(userModel.create({
		nombre:'Ronald',
		apellido1:'Lobo',
		apellido2:'Barrantes',
		idSucursal:sucursal._id,
		telefonos:[{
			telefono:'87051854',
			estado: 1
		}],
		correo:{correo:'ronald.lb2@gmail.com', estado: 1},
		rol: 1,
		clave: 'clave',
		cedula: '206780037'
	}));
}


add();







