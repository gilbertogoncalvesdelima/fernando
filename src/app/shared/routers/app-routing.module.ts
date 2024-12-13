import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ManualPostingsComponent } from 'src/app/pages/lancamento-manual/lancamento-manual.component';
import { FechamentoMensalComponent } from 'src/app/pages/fechamento-mensal/fechamento-mensal.component';
import { ProdutosComponent } from 'src/app/pages/produtos/produtos.component';
import { LancamentoManualComponent } from 'src/app/pages/lancamento-mensal/lancamento-manual/lancamento-manual.component';
import { LancamentoTablesComponent } from 'src/app/pages/lancamento-mensal/lancamento-tables.component';
import { LancamentoProcessadoComponent } from 'src/app/pages/lancamento-mensal/lancamento-processado/lancamento-processado.component';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'fechamento-mensal', component: FechamentoMensalComponent },
  {
    path: 'lancamento-tables',
    component: LancamentoTablesComponent,
    children: [
      { path: '', redirectTo: 'lancamento-manual', pathMatch: 'full' }, // Redireciona para lancamento-manual
      { path: 'lancamento-manual', component: LancamentoManualComponent },
      { path: 'lancamento-processado', component: LancamentoProcessadoComponent }
    ]
  },
  { path: '**', redirectTo: 'produtos' } // Rota coringa para 404
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
