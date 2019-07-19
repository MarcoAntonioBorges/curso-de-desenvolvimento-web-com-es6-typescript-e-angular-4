"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido, carro) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
        this.carro = carro;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.setCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.getCarro = function () {
        return this.carro;
    };
    return Pessoa;
}());
exports.default = Pessoa;
