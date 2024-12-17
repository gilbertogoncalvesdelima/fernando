import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerModule } from '../shared/components/container/container.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { TipoProdutoComponent } from './produtos/tipo-produto/tipo-produto.component';
import { CarteiraProdutoComponent } from './produtos/carteira-produtos/carteira-produtos.component';
import { AgrupamentoProdutosComponent } from './produtos/agrupamento-produtos/agrupamento-produtos.component';
import { AgrupamentoEmpresasComponent } from './produtos/agrupamento-empresas/agrupamento-empresas.component';
import { GrupoProducaoComponent } from './produtos/grupo-producao/grupo-producao.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    ProdutosComponent,
    TipoProdutoComponent,
    CarteiraProdutoComponent,
    AgrupamentoProdutosComponent,
    AgrupamentoEmpresasComponent,
    GrupoProducaoComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    ContainerModule
    ],
  exports: [
    ProdutosComponent,
  ]
})
export class PagesModule { }
