import { Cliente } from "./Cliente.js";

export class ContaCorrente {
          //atributos
          agencia;
          _cliente;
          _saldo = 0;


          //acessores
          set cliente(novoValor) {
                    if (novoValor instanceof Cliente) {
                              this._cliente = novoValor;
                    }

          }

          get cliente(){
                    return this._cliente;
          }

          get saldo(){
                    return this._saldo;
          }

          //construtor
          constructor(agencia, cliente){
                    this.cliente = cliente;
                    this.agencia = agencia;
          }


          //métodos
          sacar(valor) {
                    if (this._saldo >= valor) {
                              this._saldo -= valor;
                    }
          }

          depositar(valor) {
                    if (valor < 0) return;
                    this._saldo += valor;
                    return valor;
          }

          transferir(valor, conta) {
                    const valorSacado = this.sacar(valor);
                    conta.depositar(valorSacado);
          }
}
