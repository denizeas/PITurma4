import { Usuario } from "../../usuario/shared/usuario.model";

export interface Cartao{

      nmNome: string,
      idCartao:number, 
      usuario: Usuario,
      nrCartao:string,
      codSeguranca:number;
      dtValidade:string;
      dtEmissao:string;

}


//GET Cartao
export interface ResponseCartao {
    cartao: Cartao
}

// GET Cartoes
export interface ResponseCartoes {
    cartoes : Cartao[]
}