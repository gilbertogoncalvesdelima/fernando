import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductionGroupService {
  // URL base para a API de grupos de produção
  private apiUrl = 'http://localhost:8081/gestaoapolice/comissao/api/provisao/grupoproducao';

  constructor(private http: HttpClient) {}

  getProductionGroup(page: number, size: number): Observable<any> {
    // Configura os parâmetros de consulta para a requisição
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    // Faz a requisição GET para a API com os parâmetros configurados
    return this.http.get<any>(this.apiUrl, { params });
  }
}
