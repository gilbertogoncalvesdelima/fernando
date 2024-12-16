import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgrupamentoEmpresasService {
  private apiUrl = 'http://localhost:8081/gestaoapolice/comissao/api/provisao/agrupamentoempresa';

  constructor(private http: HttpClient) {}

  getAgrupamentoEmpresas(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(this.apiUrl, { params });
  }
}
