import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductGroupingService {
  private apiUrl = 'http://localhost:8081/gestaoapolice/comissao/api/provisao/agrupamentoproduto';

  constructor(private http: HttpClient) {}

  // Realiza uma requisição GET para buscar agrupamentos de produtos com suporte a paginação
  getProductGrouping(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(this.apiUrl, { params });
  }
}
