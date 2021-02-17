import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgramaNutricionalComponent } from './programa-nutricional/programa-nutricional.component';
import { AgendaAlimentarComponent } from './agenda-alimentar/agenda-alimentar.component';
import { ResultadoReceitaComponent } from './resultado-receita/resultado-receita.component';
import { PagamentoServicoComponent } from './pagamento-servico/pagamento-servico.component';
import { SustentabilidadeComponent } from './sustentabilidade/sustentabilidade.component';
import { ConfirmacaoAgendamentoComponent } from './confirmacao-agendamento/confirmacao-agendamento.component';
import { PesquisarReceitasComponent } from './pesquisar-receitas/pesquisar-receitas.component';
import { ResultadoBuscarReceitasComponent } from './resultado-buscar-receitas/resultado-buscar-receitas.component';
import { HistoricoAgservicoComponent } from './historico-agservico/historico-agservico.component';
import { AgservicoComponent } from './agservico/agservico.component';
import { ProcurarPacienteComponent } from './procurar-paciente/procurar-paciente.component';
import { ReceitaService } from './shared/receitas.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  
  declarations: [PagamentoServicoComponent, SustentabilidadeComponent, ConfirmacaoAgendamentoComponent,PesquisarReceitasComponent, ResultadoBuscarReceitasComponent, HistoricoAgservicoComponent, AgservicoComponent, HistoricoAgservicoComponent, AgservicoComponent, ProcurarPacienteComponent, ProgramaNutricionalComponent, AgendaAlimentarComponent, ResultadoReceitaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PesquisarReceitasComponent
  ],
  providers: [
    ReceitaService
  ]
})
export class Grupo3Module { }

