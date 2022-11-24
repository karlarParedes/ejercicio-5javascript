let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let barrio = document.querySelector('#barrio');
let cidade = document.querySelector('#localidade');
let estado = document.querySelector('#estado');

cep.value = '01001000';

cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let.script = document.createElement('script');
    script.src = 'htt://viacep.com.br/ws/' + cep + '/json/?callback=popularForm';
    document.body.appendChild(script);
});

function popularForm(resposta) {

    if ("error" in resposta) {
        alert('cep não encontrado');
        return;
    }

    console.log(resposta);
    rua.value = resposta.logradouro;
    barrio.value = resposta.barrio;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}