"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.velocidade = 0;
    }
    Veiculo.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    Veiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Veiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    return Veiculo;
}());
exports.default = Veiculo;
