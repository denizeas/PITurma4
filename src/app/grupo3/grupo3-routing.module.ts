import { Routes } from '@angular/router';
import { PesquisarReceitasComponent } from './pesquisar-receitas/pesquisar-receitas.component'
import { ResultadoBuscarReceitasComponent } from './resultado-buscar-receitas/resultado-buscar-receitas.component';

export const Grupo3RoutingModule: Routes = [
    {path: 'pesquisar-receitas', component: PesquisarReceitasComponent},
    {path: 'resultado-buscar-receitas', component: ResultadoBuscarReceitasComponent}
  
];

