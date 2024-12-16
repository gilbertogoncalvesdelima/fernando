import { Component } from '@angular/core';
import { TipoProdutoComponent } from './tipo-produto/tipo-produto.component';
import { CarteiraProdutoComponent } from './carteira-produtos/carteira-produtos.component';
import { AgrupamentoProdutosComponent } from './agrupamento-produtos/agrupamento-produtos.component';
import { AgrupamentoEmpresasComponent } from './agrupamento-empresas/agrupamento-empresas.component';
import { GrupoProducaoComponent } from './grupo-producao/grupo-producao.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
  tabs = [
    {
      title: 'TIPO PRODUTO',
      component: TipoProdutoComponent,
    },
    {
      title: 'CARTEIRA PRODUTOS',
      component: CarteiraProdutoComponent,
    },
    {
      title: 'AGRUPAMENTO PRODUTOS',
      component: AgrupamentoProdutosComponent,
    },
    {
      title: 'AGRUPAMENTO EMPRESAS',
      component: AgrupamentoEmpresasComponent,
    },
    {
      title: 'GRUPO DE PRODUÇÃO',
      component: GrupoProducaoComponent,
    }
  ];


  loadTabContent(index: number): void {

  }
}
