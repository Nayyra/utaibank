export class Cliente {
          nome;
          _cpf;

          //ascessor
          get cpf(){
                    return this._cpf;
          }

          //construtor
          constructor(nome, cpf){
                    this.nome = nome;
                    this._cpf = cpf;
          }
}

