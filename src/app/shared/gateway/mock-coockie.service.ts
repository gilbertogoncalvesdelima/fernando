import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment as env } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MockCookieService {

  assessoria: any = {
                      "ADMINISTRADOR" : "N",
                      "AUTH_ORIGEM" : "OPENAM",
                      "TIPOUSUARIO" : "ASSESSORIA",
                      "descrip" : location.origin,
                      "CONTACORRENTE_PARCEIRO_NEGOCIO_PRIMARIO" : "N",
                      "CODIGO_PARCEIRO_NEGOCIO_SECUNDARIO" : "8212002",
                      "NOME_PARCEIRO_NEGOCIO_SECUNDARIO" : "JLD ASSESSORIA E CONS DE SEGUROS LTDA",
                      "TIPO_PARCEIRO_NEGOCIO_PRIMARIO" : "8",
                      "SITEORIGEM" : "77747",
                      "ID_PARCEIRO_NEGOCIO_PRIMARIO" : "591076",
                      "ID_PARCEIRO_NEGOCIO_SECUNDARIO" : "591076",
                      "INDICADORVENDA_PARCEIRO_NEGOCIO_PRIMARIO" : "N",
                      "NOME_PARCEIRO_NEGOCIO_PRIMARIO" : "JLD ASSESSORIA E CONS DE SEGUROS LTDA",
                      "PREPOSTO_PARCEIRO_NEGOCIO_PRIMARIO" : "N",
                      "COD_INTERNO" : "8212002",
                      "TIPOSITE" : "ASSESSORIA",
                      "PERFIL" : "Portal Assessoria - Acesso Colaborador",
                      "LOGIN" : env.config_local.mock_login_cookie,
                      "TIPO_PARCEIRO_NEGOCIO_SECUNDARIO" : "8",
                      "CODIGO_PARCEIRO_NEGOCIO_PRIMARIO" : "8201009"
                  };

  corretor: any = {
                    "ADMINISTRADOR" : "N",
                    "AUTH_ORIGEM" : "OPENAM",
                    "CODIGO_PARCEIRO_NEGOCIO_SECUNDARIO" : "40",
                    "STATUS_TOKIO_SECUNDARIO" : "A",
                    "TIPO_PARCEIRO_NEGOCIO_PRIMARIO" : "3",
                    "SITEORIGEM" : "38019",
                    "ID_PARCEIRO_NEGOCIO_PRIMARIO" : "519806",
                    "INDICADORVENDA_PARCEIRO_NEGOCIO_PRIMARIO" : "N",
                    "NOME_PARCEIRO_NEGOCIO_PRIMARIO" : "HORIZONTE CORRET. DE SEGS. S/C LTDA.",
                    "PREPOSTO_PARCEIRO_NEGOCIO_PRIMARIO" : "N",
                    "COD_INTERNO" : "40",
                    "STATUS_SUSEP_PRIMARIO" : "A",
                    "LOGIN" : env.config_local.mock_login_cookie,
                    "TIPOUSUARIO" : "CORRETOR",
                    "descrip" : location.origin,
                    "NOME_PARCEIRO_NEGOCIO_SECUNDARIO" : "HORIZONTE CORRET. DE SEGS. S/C LTDA.",
                    "AGRUPADOR" : "0",
                    "STATUS_SUSEP_SECUNDARIO" : "A",
                    "ID_PARCEIRO_NEGOCIO_SECUNDARIO" : "519806",
                    "STATUS_TOKIO_PRIMARIO" : "A",
                    "TIPOSITE" : "CORRETOR",
                    "PERFIL" : "Portal Corretor - Acesso Comercial,Portal Corretor - Acesso Colaborador",
                    "TIPO_PARCEIRO_NEGOCIO_SECUNDARIO" : "3",
                    "MOTIVO_BLOQUEIO" : "ACT",
                    "CODIGO_PARCEIRO_NEGOCIO_PRIMARIO" : "40"
                };
 
  imobiliaria: any = {
                      "ADMINISTRADOR" : "N",
                      "AUTH_ORIGEM" : "OPENAM",
                      "TIPOUSUARIO" : "IMOBILIARIA",
                      "descrip" : location.origin,
                      "CONTACORRENTE_PARCEIRO_NEGOCIO_PRIMARIO" : "N",
                      "CODIGO_PARCEIRO_NEGOCIO_SECUNDARIO" : "587700",
                      "NOME_PARCEIRO_NEGOCIO_SECUNDARIO" : "CONTATO GESTAO IMOBILIARIA E ADMINISTRACAO ORGANIZACIONAL LTDA - ME",
                      "TIPO_PARCEIRO_NEGOCIO_PRIMARIO" : "5",
                      "SITEORIGEM" : "32061",
                      "ID_PARCEIRO_NEGOCIO_PRIMARIO" : "587700",
                      "ID_PARCEIRO_NEGOCIO_SECUNDARIO" : "587700",
                      "INDICADORVENDA_PARCEIRO_NEGOCIO_PRIMARIO" : "N",
                      "NOME_PARCEIRO_NEGOCIO_PRIMARIO" : "CONTATO GESTAO IMOBILIARIA E ADMINISTRACAO ORGANIZACIONAL LTDA - ME",
                      "PREPOSTO_PARCEIRO_NEGOCIO_PRIMARIO" : "N",
                      "COD_INTERNO" : "587700",
                      "TIPOSITE" : "IMOBILIARIA",
                      "PERFIL" : "Portal Imobiliaria - Acesso Comercial",
                      "LOGIN" : env.config_local.mock_login_cookie,
                      "TIPO_PARCEIRO_NEGOCIO_SECUNDARIO" : "5",
                      "CODIGO_PARCEIRO_NEGOCIO_PRIMARIO" : "587700"
                  };

  representante: any = {
                        "ADMINISTRADOR" : "N",
                        "AUTH_ORIGEM" : "OPENAM",
                        "TIPOUSUARIO" : "REPRESENTANTE",
                        "descrip" : location.origin,
                        "CONTACORRENTE_PARCEIRO_NEGOCIO_PRIMARIO" : "N",
                        "CODIGO_PARCEIRO_NEGOCIO_SECUNDARIO" : "40",
                        "NOME_PARCEIRO_NEGOCIO_SECUNDARIO" : "HORIZONTE CORRET. DE SEGS. S/C LTDA.",
                        "TIPO_PARCEIRO_NEGOCIO_PRIMARIO" : "16",
                        "SITEORIGEM" : "691855",
                        "ID_PARCEIRO_NEGOCIO_PRIMARIO" : "6",
                        "ID_PARCEIRO_NEGOCIO_SECUNDARIO" : "519806",
                        "INDICADORVENDA_PARCEIRO_NEGOCIO_PRIMARIO" : "N",
                        "STATUS_TOKIO_PRIMARIO" : "A",
                        "NOME_PARCEIRO_NEGOCIO_PRIMARIO" : "Teste Representante",
                        "PREPOSTO_PARCEIRO_NEGOCIO_PRIMARIO" : "N",
                        "COD_INTERNO" : "40",
                        "TIPOSITE" : "REPRESENTANTE",
                        "PERFIL" : "Portal Representantes - Acesso Colaborador",
                        "LOGIN" : env.config_local.mock_login_cookie,
                        "TIPO_PARCEIRO_NEGOCIO_SECUNDARIO" : "3",
                        "CODIGO_PARCEIRO_NEGOCIO_PRIMARIO" : "6"
                    };

    default: any = {
      "descrip" : location.origin,
      "LOGIN" : env.config_local.mock_login_cookie,
    }
 
  constructor(private http: HttpClient) {}

  carregar(tipoCookie: any): Observable<any> {
    return new Observable((observer) => {
      switch(tipoCookie) {
        case 'assessoria':
          observer.next(this.assessoria);
          break;
        case 'corretor':
          observer.next(this.corretor);
          break;
        case 'imobiliaria':
          observer.next(this.imobiliaria);
          break;
        case 'representante':
          observer.next(this.representante);
          break;
        default:
          observer.next(this.default);  
      };
    });
  }
}
