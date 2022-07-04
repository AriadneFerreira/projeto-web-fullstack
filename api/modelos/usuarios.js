'use strict'

const {default: mongoose} = require(mongoose)

var mongoose = require('mongoose');
var Esquema = mongoose.Esquem;

var UsuarioEsquema = Esquema({
    nome : String,
    sobrenome: String,
    apelido : String,
    email : String,
    senha : String,
    funao : String,
    imagem : String

});

module.exports = mongoos.modelo ('Usuario' , UsuarioEsquema);