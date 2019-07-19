import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria';

let carro1 = new Carro('Veloster', 3)
let moto1 = new Moto()

console.log(carro1)

console.log(moto1);

moto1.acelerar()
console.log(moto1);

carro1.acelerar()
console.log(carro1);

let concessionaria1 = new Concessionaria('', [])
console.log(concessionaria1);
console.log(concessionaria1.fornecerHorarioDeFuncionamento());

