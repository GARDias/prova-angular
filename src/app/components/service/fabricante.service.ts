import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fabricante } from '../model/fabricante';
const URL = 'http://localhost:8080/fabricante';
@Injectable({
  providedIn: 'root'
})
export class FabricanteService {
  
  constructor(private http : HttpClient) { }

  buscarFabricante():Observable<fabricante[]>{
    return this.http.get<fabricante[]>(URL);
  }
}
