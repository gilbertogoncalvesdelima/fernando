import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LancamentoManualService {

  private apiUrl = 'http://localhost:8081/gestaoapolice/comissao/api/provisao/lancamento-manual';

  constructor(private http: HttpClient) {}

  // Realiza uma requisição GET para buscar os tipos de produtos com suporte a paginação
  getLancamentoManual(dataAlteracao?: string, codigoNAC?: number, lancamentoProcessado?: string): Observable<any> {
    let params = new HttpParams()

    if (dataAlteracao) {
      params = params.append('dataAlteracao', dataAlteracao); // Adiciona sem substituir
    }

    if (codigoNAC) {
      params = params.append('codigoNAC', codigoNAC.toString()); // Adiciona sem substituir
    }

    if (lancamentoProcessado) {
      params = params.append('lancamentoProcessado', lancamentoProcessado); // Adiciona sem substituir
    }

    return this.http.get<any>(this.apiUrl, { params }); // Envia a requisição GET para a API com os parâmetros de paginação
  }
}
