import { Component, OnInit } from '@angular/core';
import { ResponseEspMed } from '../../shared/model/espMed';
import { EspMedServiceService } from '../../shared/services/esp-med-service.service';


@Component({
  selector: 'app-agendamento-consultas',
  templateUrl: './agendamento-consultas.component.html',
  styleUrls: ['./agendamento-consultas.component.css']
})
export class AgendamentoConsultasComponent implements OnInit {
  
  constructor(public espMedService: EspMedServiceService){}

  responseEspMed : ResponseEspMed[];
  idEspMedString : string;
  idEspSelect : number;

  
  ngOnInit(): void {
      this.listarEspecialidades(1);


  }

  listarEspecialidades(idTipoConsulta: number){
    this.espMedService.listarEspDisponiveis(idTipoConsulta).subscribe(
      response => {
        this.responseEspMed = response;
        console.log(response);
        if (response.length == 0){
          alert('O tipo de consulta que você escolheu não está disponível para a especialidade selecionada.');
        };    
      }
    )
  }



  salvarEspLS(){
    this.espEscolhida();
    localStorage.setItem("idEspMed", this.idEspMedString);  
    
  }

  espEscolhida(){
    this.idEspMedString = this.idEspSelect.toString();
  }



}