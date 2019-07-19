"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenericDAOImpl = /** @class */ (function () {
    function GenericDAOImpl() {
        this.nomeTabela = '';
    }
    GenericDAOImpl.prototype.inserir = function (object) {
        console.log('Logica de Insert ' + object);
        return true;
    };
    GenericDAOImpl.prototype.atualizar = function (object) {
        console.log('Logica de Update ' + object);
        return true;
    };
    GenericDAOImpl.prototype.remover = function (id) {
        console.log('Logica de Delete');
        return Object();
    };
    GenericDAOImpl.prototype.selecionar = function (id) {
        console.log('Logica de Select');
        return Object();
    };
    GenericDAOImpl.prototype.selecionarTodos = function () {
        console.log('Logica de Select All');
        return [Object()];
    };
    return GenericDAOImpl;
}());
exports.GenericDAOImpl = GenericDAOImpl;
