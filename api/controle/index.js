function init(req, res) {
	res.status(200).send({
		message: 'Hello word!',
	});
}

function test(req, res) {
	res.status(200).send({
		message: 'Testing node server!',
	});
}

function hello (req, rest){
	rest.status(200).send({
message: 'Teste de mensagem',

	});
}

module.exports = { init, test, hello};
