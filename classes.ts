class Data {
  dia: number;
  mes: number;
  ano: number;


 
constructor(dia: number, mes: number, ano: number) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

  }

} 

const data = new Data(1, 1, 2020); 


console.log(data.dia);

const data2 = new Data(1, 1, 1);

 class Carro {
    private velocidadeAtual: number = 0; 
    
    constructor(
         public marca: string,
         public modelo: string,
         private velocidadeMaxima: number = 220
     ) {}
 
     private alterarVelocidade(delta:number) {
         // faco as validaçãoes de aceleração e frenagem
         // this. velocidadeAtaual = xxx
         const novaVelocidade = this.velocidadeAtual + delta;
         
         if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
             this.velocidadeAtual = novaVelocidade;   
         }
         else {
             this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
         }
     
        }

     acelerar() {
         this.alterarVelocidade(5);

     }

     frear( ) {
         this.alterarVelocidade(-5);

      }

    } 

    const carro = new Carro('Chevrolet', 'Prisma', 250);
    carro.acelerar();


    // Herença

    class Camaro extends Carro {
        private turbo = false;
        
        constructor() {
            super('Checrolet', 'Camaro', 500);
        
        }
            ligarTurbo() {
                this.turbo = true;
            }    
        
        }



    const camaro = new Camaro();
    camaro.acelerar()
    camaro.frear();
    camaro.ligarTurbo();

    

    