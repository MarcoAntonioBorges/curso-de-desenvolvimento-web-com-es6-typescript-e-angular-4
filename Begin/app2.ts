//Imports...
import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

let concessionaria = new Concessionaria('Av. Paulista', []);
console.log(concessionaria)

let carro1 = new Carro('Mclaren P1', 2)
let carro2 = new Carro('Fusca 1980', 4)
let carro3 = new Carro('Dodge Journey', 2)
let carro4 = new Carro('Veloster', 3)

let listaDeCarro: Array<Carro> = new Array<Carro>()

listaDeCarro.push(carro1, carro2, carro3, carro4)

console.log(listaDeCarro);

concessionaria.setListaDeCarro(listaDeCarro)
console.log(concessionaria);

let pessoa = new Pessoa('Marco A.', 'Veloster', carro1)


concessionaria.getListaDeCarro().map((carro: Carro, index: number) => {
  if (carro['modelo'].toLowerCase() == pessoa.getCarroPreferido().toLowerCase()){
    pessoa.setCarro(carro)
  }
})

let carro5 = new Carro('Ferrari F1', 0)
listaDeCarro.push(carro5);
concessionaria.setListaDeCarro(listaDeCarro)



console.log(pessoa)

console.log(concessionaria);
