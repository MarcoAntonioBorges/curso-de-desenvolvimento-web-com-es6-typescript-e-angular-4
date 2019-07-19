"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Imports...
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var concessionaria = new Concessionaria_1.default('Av. Paulista', []);
console.log(concessionaria);
var carro1 = new Carro_1.default('Mclaren P1', 2);
var carro2 = new Carro_1.default('Fusca 1980', 4);
var carro3 = new Carro_1.default('Dodge Journey', 2);
var carro4 = new Carro_1.default('Veloster', 3);
var listaDeCarro = new Array();
listaDeCarro.push(carro1, carro2, carro3, carro4);
console.log(listaDeCarro);
concessionaria.setListaDeCarro(listaDeCarro);
console.log(concessionaria);
var pessoa = new Pessoa_1.default('Marco A.', 'Veloster', carro1);
concessionaria.getListaDeCarro().map(function (carro, index) {
    if (carro['modelo'].toLowerCase() == pessoa.getCarroPreferido().toLowerCase()) {
        pessoa.setCarro(carro);
    }
});
var carro5 = new Carro_1.default('Ferrari F1', 0);
listaDeCarro.push(carro5);
concessionaria.setListaDeCarro(listaDeCarro);
console.log(pessoa);
console.log(concessionaria);
