import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VeiculolistDTO } from '../model/VeiculolistDTO';
import { Veiculo } from '../model/Veiculo';
const URL = 'http://localhost:8080/veiculo';
@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  
  constructor(private http : HttpClient) { }

  buscarTodos():Observable<VeiculolistDTO[]>{
    return this.http.get<VeiculolistDTO[]>(URL);
  }

  inserir(carro : Veiculo):Observable<string>{
    return this.http.post<string>(URL, carro);
  }
}
