import {Cliente} from "./Cliente.js"
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente("Joãozin", 394892482934);
const cliente2 = new Cliente("Alice", 88822233309);

const contaJoão = new ContaCorrente(1001, cliente1);
contaJoão.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaJoão.transferir(valor, conta2);

console.log(cliente1);
console.log(cliente2);




