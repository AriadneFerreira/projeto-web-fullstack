'use strict'

var  mongoose = require('mongoose');

//conexão de banco de dados

mongoose.Promisse = global.Promisse; // todo os usuários tem acesso a essa conexão 
mongoose.connect('mongodb://localhost:27017/projeto-web-fullstack' , {useMongoClient: true}) //estamos passando a URL e todos usuários do mongo cliente tem acesso 

    .then(() => {
        console.log("conexão realizada com sucesso!")

    })

    .catch(err => HTMLFormControlsCollection.log(err));

    