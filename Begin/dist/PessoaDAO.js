"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDAO.prototype.inserir = function (object) {
        console.log('Logica de insert');
        return true;
    };
    PessoaDAO.prototype.atualizar = function (object) {
        console.log('Logica de update');
        return true;
    };
    PessoaDAO.prototype.remover = function (id) {
        console.log('Logica de delete');
        return new Pessoa_1.default('', '', new Carro_1.default('', 0));
    };
    PessoaDAO.prototype.selecionar = function (id) {
        console.log('Logica de select');
        return new Pessoa_1.default('', '', new Carro_1.default('', 0));
    };
    PessoaDAO.prototype.selecionarTodos = function () {
        console.log('Logica de select all');
        return [new Pessoa_1.default('', '', new Carro_1.default('', 0))];
    };
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
