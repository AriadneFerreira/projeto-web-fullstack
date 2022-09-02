'use strict';

var Usuario = require('../modelos/usuarios');

function inicio(req, res) {
	res.status(200).send({
		nome: 'Ariadne',
		idade: '18 anos',
		apelido: 'Ari ',
	});
}

function teste(req, res) {
	res.status(200).send({
		message: 'Apenas um teste de rota!',
	});
}

function hello (req, res){
	res.status(200).send({
		message: 'Esse é o fim da rota!',
	});
}

module.exports = { inicio, teste , hello};
