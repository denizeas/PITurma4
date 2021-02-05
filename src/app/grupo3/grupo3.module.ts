import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisarReceitasComponent } from './pesquisar-receitas/pesquisar-receitas.component';
import { ResultadoBuscarReceitasComponent } from './resultado-buscar-receitas/resultado-buscar-receitas.component';
import {RouterModule } from '@angular/router';
import { HistoricoAgservicoComponent } from './historico-agservico/historico-agservico.component';
import { AgservicoComponent } from './agservico/agservico.component';

@NgModule({
  declarations: [PesquisarReceitasComponent, ResultadoBuscarReceitasComponent, HistoricoAgservicoComponent, AgservicoComponent],
                
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Grupo3Module { }
