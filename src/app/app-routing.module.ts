import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { 
    path: 'aluguel', 
    loadChildren: '../app/components/aluguelveiculo/aluguel-veiculo.module#AluguelVeiculoModule'
  }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ], 
  declarations: []
})
export class AppRoutingModule { }
