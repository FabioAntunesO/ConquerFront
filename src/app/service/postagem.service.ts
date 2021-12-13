import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://conquesting.herokuapp.com/produtos', this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://conquesting.herokuapp.com/produtos/${id}`, this.token)
  }

  getByTituloPostagem(curso: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://conquesting.herokuapp.com/produtos/curso/${curso}`, this.token)
  }

  postPostagem(postagem: Postagem) : Observable<Postagem>{
    return this.http.post<Postagem>('https://conquesting.herokuapp.com/produtos', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://conquesting.herokuapp.com/produtos', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://conquesting.herokuapp.com/produtos/${id}`, this.token)
  }

}
