import Concessionaria from "./Concessionaria";

export class ConcessionariaDAO {
  nomeTabela: string = 'tb_concessionaria'

  inserir(object: Concessionaria): boolean {
    console.log('Logica de insert');
    return true

  }
  atualizar(object: Concessionaria): boolean {
    console.log('Logica de update');
    return true
  }
  remover(id: number) {
    console.log('Logica de delete');
    return new Concessionaria('', [])
  }
  selecionar(id: number) {
    console.log('Logica de select');
    return new Concessionaria('', [])
  }
  selecionarTodos(): [Concessionaria] {
    console.log('Logica de select all');
    return [new Concessionaria('', [])]
  }
}