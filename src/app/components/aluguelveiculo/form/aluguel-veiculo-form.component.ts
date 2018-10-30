import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../model/Veiculo';
import { fabricante } from '../../model/fabricante';
import { FabricanteService } from '../../service/fabricante.service';
import { Modelo } from '../../model/Modelo';
import { ModeloService } from '../../service/modelo.service';
import { VeiculoService } from '../../service/veiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluguel-veiculo-form',
  templateUrl: './aluguel-veiculo-form.component.html',
  styleUrls: ['./aluguel-veiculo-form.component.css']
})
export class AluguelVeiculoFormComponent implements OnInit {
  carro : Veiculo;
  listf : Array<fabricante>;
  listm : Array<Modelo>;
  modelo : Modelo;
  fabri : fabricante
 
  erro : string;
  constructor(private router: Router,private service : FabricanteService, private service2 : ModeloService, private service3 : VeiculoService) { }

  ngOnInit() {
    this.modelo = new Modelo();
    this.listm = new Array<Modelo>();
    this.fabri = new fabricante();
    this.listf = new Array<fabricante>();
    this.carro = new Veiculo();
    this.carro.modelo = new Modelo();
    this.carro.modelo.fabricante = new fabricante();
    this.service.buscarFabricante().subscribe(resp => this.listf = resp);
  }

  buscarModelo(){
    this.service2.buscar(this.carro.modelo.fabricante.id).subscribe(resp => this.listm = resp);
  }
  salvar(){
    this.erro='';
    this.service3.inserir(this.carro).subscribe(() => {
      this.router.navigate(['/aluguel/inserir']);
  }, (err) => {
     this.erro = err.error.message;
  });
  }
}
