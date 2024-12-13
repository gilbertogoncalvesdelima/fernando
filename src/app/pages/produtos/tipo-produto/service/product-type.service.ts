import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  private apiUrl = 'http://localhost:8081/gestaoapolice/comissao/api/provisao/tipoproduto';

  constructor(private http: HttpClient) {}

  // Realiza uma requisição GET para buscar os tipos de produtos com suporte a paginação
  getProductType(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString()) // Define o número da página como parâmetro
      .set('size', size.toString()); // Define o tamanho da página como parâmetro

    return this.http.get<any>(this.apiUrl, { params }); // Envia a requisição GET para a API com os parâmetros de paginação
  }
}
