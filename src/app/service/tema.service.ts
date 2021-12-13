import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://conquesting.herokuapp.com/categorias', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://conquesting.herokuapp.com/categorias/${id}`, this.token)
  }

  getByNomeTema(nome: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://conquesting.herokuapp.com/categorias/nome/${nome}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://conquesting.herokuapp.com/categorias', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://conquesting.herokuapp.com/categorias', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://conquesting.herokuapp.com/categorias/${id}`, this.token)
  }

}
