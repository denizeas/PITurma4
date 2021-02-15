import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { OutputCliente, ResponseCidades, ResponseFormularioCadastro, ResponseFormularioMeusDados} from './cliente.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class ClienteService {
   
    constructor(private http: HttpClient) { }
  
    private readonly API = 'http://localhost:8080';
         
    getFormularioCadastro(){
       const URL = `${this.API}/cliente/cadastro`
      return this.http.get<ResponseFormularioCadastro>(URL);
    }

    getFormularioMeusDados(idUsuario: number): Observable<ResponseFormularioMeusDados>{
        const URL = `${this.API}/cliente/meus-dados/${idUsuario}`
       return this.http.get<ResponseFormularioMeusDados>(URL);
    }
    getCidadesByUf(idUf: number): Observable<ResponseCidades>{
        const URL = `${this.API}/cidadeBuscar/${idUf}`
        return this.http.get<ResponseCidades>(URL);
    }
    createUsuario(outputCliente: OutputCliente): Observable<OutputCliente> {
        return this.http.post<OutputCliente>('http://localhost:8080/usuario', outputCliente);
    }
    }