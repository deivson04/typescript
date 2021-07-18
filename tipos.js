"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = 'deivson araujo';
// Array
var idades1 = [23, 28, 45, 32, 45];
var idades2 = [23, 28, 45, 32, 45];
//tuple obs: é um array! sendo que pode ser misturada
var jogadores;
jogadores = ['vitor', 3, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao[StatusAprovacao["Aprovado"] = 0] = "Aprovado";
    StatusAprovacao[StatusAprovacao["pendente"] = 1] = "pendente";
    StatusAprovacao[StatusAprovacao["rejeitado"] = 2] = "rejeitado";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any obs: recebe qualquer coisa que vem de um array em um api
var retornoDaApi1 = [123, 'Vitor', false];
var retornoDaApi2 = [];
// void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u1 = undefined;
var u = null;
// Object
function criar(Objecto) {
    // ...
}
criar({
    propriedade: 1,
});
// criar('deivson') // Dá error
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// union Types
//const  = nota: string | number = 5;
function ExibirNota(nota) {
    console.log("A nota \u00E9: " + nota);
}
ExibirNota('10');
ExibirNota(10);
//type Funcionarios = Array<Funcionario>;
var funcionarios = [{
        nome: 'Deivson',
        sobrenome: 'Araujo',
        dataNascimento: new Date()
    }];
function tratarfuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Deivson',
    telefone1: '123456',
};
// type Assertion 
var minhaIdade = 23;
minhaIdade.toString();
//(<number>minhaIdade). toString();
//const input = document.getElementById("numero1") as HTMLInputElement;
var input = document.getElementById("numero1");
console.log(input.value);
