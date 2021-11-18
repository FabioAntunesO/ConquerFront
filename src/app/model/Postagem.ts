import { Tema } from './Tema';
import { User } from './User';
//PRODUTO
export class Postagem{
  public id: number
  public curso: string
  public descricao: string
  public preco: number
  public imagem: string
  public usuario: User
  //CATEGORIA
  public tema: Tema
}
