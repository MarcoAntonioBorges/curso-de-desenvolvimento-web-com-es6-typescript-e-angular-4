import DAOInterface from "./GenericDAO";
import Pessoa from "./Pessoa";
import Carro from "./Carro";


export class PessoaDAO implements DAOInterface {
  nomeTabela: string = 'tb_pessoa'

  inserir(object: Pessoa): boolean {
    console.log('Logica de insert');
    return true

  }
  atualizar(object: Pessoa): boolean {
    console.log('Logica de update');
    return true
  }
  remover(id: number) {
    console.log('Logica de delete');
    return new Pessoa('', '', new Carro('', 0))
  }
  selecionar(id: number) {
    console.log('Logica de select');
    return new Pessoa('', '', new Carro('', 0))
  }
  selecionarTodos(): [Pessoa] {
    console.log('Logica de select all');
    return [new Pessoa('', '', new Carro('', 0))]
  }
}