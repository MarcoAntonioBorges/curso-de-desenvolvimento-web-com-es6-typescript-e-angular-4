"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarro) {
        this.endereco = endereco;
        this.listaDeCarro = listaDeCarro;
    }
    Concessionaria.prototype.getEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.getListaDeCarro = function () {
        return this.listaDeCarro;
    };
    Concessionaria.prototype.setEndereco = function (endereco) {
        this.endereco = endereco;
    };
    Concessionaria.prototype.setListaDeCarro = function (listaDeCarro) {
        this.listaDeCarro = listaDeCarro;
    };
    Concessionaria.prototype.fornecerHorarioDeFuncionamento = function () {
        return 'De segunda a sexta das 08:00 as 18:00';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
