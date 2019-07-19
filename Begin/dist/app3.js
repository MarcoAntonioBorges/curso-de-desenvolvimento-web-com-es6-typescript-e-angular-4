"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var carro1 = new Carro_1.default('Veloster', 3);
var moto1 = new Moto_1.default();
console.log(carro1);
console.log(moto1);
moto1.acelerar();
console.log(moto1);
carro1.acelerar();
console.log(carro1);
var concessionaria1 = new Concessionaria_1.default('', []);
console.log(concessionaria1);
console.log(concessionaria1.fornecerHorarioDeFuncionamento());
