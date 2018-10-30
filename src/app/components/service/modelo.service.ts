import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modelo } from '../model/Modelo';
  const URL = 'http://localhost:8080/modelo?id='
@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  constructor(private http : HttpClient) { }

  buscar(id:number):Observable<Modelo[]>{

    return this.http.get<Modelo[]>(URL + id);

  }
}
