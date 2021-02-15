import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseAgenda } from '../model/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http: HttpClient) { }

  private readonly APIAGENDAPORESP = 'http://localhost:8080/agenda/';
  private readonly MUDARSTATUSAGENDADA = 'http://localhost:8080/agenda/disponibilidade/'

  listarPorEsp(idTipoConsulta: number, idEspecialidade: number){
    // return this.http.get<ResponseAgenda[]>`${this.APIAGENDAPORESP}/${idTipoConsulta}/${idEspecialidade}`;
    return this.http.get<ResponseAgenda[]>(this.APIAGENDAPORESP + idTipoConsulta + "/" + idEspecialidade);
  }

  mudarStatus(idAgPaciente: number){
    return this.http.get<ResponseAgenda>(this.MUDARSTATUSAGENDADA + idAgPaciente);
  }



}