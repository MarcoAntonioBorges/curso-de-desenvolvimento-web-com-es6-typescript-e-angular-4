"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
var GenericDAOImpl_1 = require("./GenericDAOImpl");
var concessionaria1 = new Concessionaria_1.default('', []);
var pessoa1 = new Pessoa_1.default('', '', new Carro_1.default('', 0));
//let concessionariaDAO = new ConcessionariaDAO()
//let pessoaDAO = new PessoaDAO()
var concessionariaDAO = new GenericDAOImpl_1.GenericDAOImpl();
concessionariaDAO.inserir(concessionaria1);
var pessoaDAO = new GenericDAOImpl_1.GenericDAOImpl();
pessoaDAO.inserir(pessoa1);
