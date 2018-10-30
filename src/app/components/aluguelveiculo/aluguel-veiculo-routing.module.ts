import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AluguelVeiculoFormComponent } from './form/aluguel-veiculo-form.component';
import { AluguelVeiculoListComponent } from './list/aluguel-veiculo-list.component';

const routes: Routes = [
  {path:'', component:AluguelVeiculoListComponent},
  {path:'inserir', component:AluguelVeiculoFormComponent},
  {path: 'listar', component:AluguelVeiculoListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AluguelVeiculoRoutingModule { }
