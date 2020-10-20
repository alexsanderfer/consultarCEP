// JavaScript Document

$('#cep').blur(function(e) {
	let cep = $('#cep').val();
	let url="http://viacep.com.br/ws/" + cep + "/json/";
	let validaCEP = /^[0-9]{5}-?[0-9]{3}$/;
	
	if(validaCEP.test(cep)) {
		$('#mensagem').hide();
		pesquisarCEP(url);
	} else {
		$('#mensagem').show();
		$('#mensagem p').html("CEP Inválido");
	}
});

function pesquisarCEP(endereco) {
	$.ajax({
		type: "GET",
		url: endereco,
		async: false
	}).done(function(data) {
		$('#bairro').val(data.bairro);
		$('#endereco').val(data.logradouro);
		$('#cidade').val(data.localidade);
		$('#estado').val(data.uf);
	}).fail(function() {
		console.log('error');
	});
}