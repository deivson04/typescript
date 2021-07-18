// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'deivson araujo';

// Array
const idades1: number[] = [23, 28, 45, 32, 45];
const idades2: Array<number> = [23, 28, 45, 32, 45];

//tuple obs: é um array! sendo que pode ser misturada
let jogadores: [string, number, boolean]
jogadores = ['vitor', 3, true];
 
// Enum
enum StatusAprovacao {
    Aprovado,
    pendente,
    rejeitado
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any obs: recebe qualquer coisa que vem de um array em um api
const retornoDaApi1 = [123, 'Vitor', false];
const retornoDaApi2: any = [];

// void
function printarNaTela(msg: string) {
    console.log(msg);
}

// Null e Undefined
const u1: undefined = undefined;
const u: null = null;

// Object
function criar(Objecto: object) {
    // ...
}
criar({
    propriedade: 1,
})
// criar('deivson') // Dá error

// Never
function loopInfinito(): never {
    while (true) {}
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha(){
    return erro('Algo falhou');
}

// union Types
//const  = nota: string | number = 5;

function ExibirNota(nota: number | string) {
   console.log(`A nota é: ${nota}`);
}

ExibirNota('10');
ExibirNota(10);

// Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento:  Date;
}


//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] =[{
    nome: 'Deivson',
    sobrenome: 'Araujo',
    dataNascimento: new Date()
}];

function tratarfuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}

 let altura: number | null = 1.6;
 altura = null;

 type Contato = {
     nome: string;
     telefone1: string;
     telefone2?: string;
 }
 
 const contato: Contato = {
    nome: 'Deivson',
    telefone1: '123456',
 }

// type Assertion 
 const minhaIdade: any = 23;
 (minhaIdade as number).toString();
 //(<number>minhaIdade). toString();

 //const input = document.getElementById("numero1") as HTMLInputElement;
 const input = <HTMLInputElement> document.getElementById("numero1");
 console.log(input.value);
