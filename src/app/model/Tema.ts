import { Postagem } from './Postagem';
//CATEGORIA
export class Tema{
  public id: number
  public tipo: string
  public organizacao: string
  public data: Date
  public foto: string
  //produto
  public postagem: Postagem[]
}
