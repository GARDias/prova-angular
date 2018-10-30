import { NgModule } from '@angular/core';
import { AluguelVeiculoRoutingModule } from './aluguel-veiculo-routing.module';
import { AluguelVeiculoFormComponent } from './form/aluguel-veiculo-form.component';
import { AluguelVeiculoListComponent } from './list/aluguel-veiculo-list.component';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AluguelVeiculoRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  declarations: [AluguelVeiculoFormComponent, AluguelVeiculoListComponent]
})
export class AluguelVeiculoModule { }
