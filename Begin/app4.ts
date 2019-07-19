import Concessionaria from './Concessionaria';
import { ConcessionariaDAO } from './ConcessionariaDAO';
import Pessoa from './Pessoa';
import Carro from './Carro';
import { PessoaDAO } from './PessoaDAO';
import { GenericDAOImpl } from './GenericDAOImpl';

let concessionaria1 = new Concessionaria('', [])
let pessoa1 = new Pessoa('', '', new Carro('', 0))

//let concessionariaDAO = new ConcessionariaDAO()
//let pessoaDAO = new PessoaDAO()

let concessionariaDAO = new GenericDAOImpl<Concessionaria>()
concessionariaDAO.inserir(concessionaria1)

let pessoaDAO = new GenericDAOImpl<Pessoa>()
pessoaDAO.inserir(pessoa1)
