import { Component, OnInit } from '@angular/core';
import { VeiculolistDTO } from '../../model/VeiculolistDTO';
import { VeiculoService } from '../../service/veiculo.service';

@Component({
  selector: 'app-aluguel-veiculo-list',
  templateUrl: './aluguel-veiculo-list.component.html',
  styleUrls: ['./aluguel-veiculo-list.component.css']
})
export class AluguelVeiculoListComponent implements OnInit {
  list : Array<VeiculolistDTO>;
  veiculo : VeiculolistDTO;
  constructor(private service : VeiculoService) { }

  ngOnInit() {
    this.veiculo = new VeiculolistDTO();
    this.list = new Array<VeiculolistDTO>();
    this.service.buscarTodos().subscribe(resp => this.list = resp);
    
  }

}
