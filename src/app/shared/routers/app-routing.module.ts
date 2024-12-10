import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ManualPostingsComponent } from 'src/app/pages/manual-postings/manual-postings.component';
import { MonthlyClosingComponent } from 'src/app/pages/monthly-closing/monthly-closing.component';
import { ProdutosComponent } from 'src/app/pages/products/products.component';
import { ManualPostingsComponent } from 'src/app/pages/release-tables/manual-postings/manual-postings.component';
import { ReleaseTablesComponent } from 'src/app/pages/release-tables/release-tables.component';
import { ReleasesProcessedComponent } from 'src/app/pages/release-tables/releases-processed/releases-processed.component';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'monthly-closing', component: MonthlyClosingComponent },
  {
    path: 'release-tables',
    component: ReleaseTablesComponent,
    children: [
      { path: '', redirectTo: 'manual-postings', pathMatch: 'full' }, // Redireciona para manual-postings
      { path: 'manual-postings', component: ManualPostingsComponent },
      { path: 'releases-processed', component: ReleasesProcessedComponent }
    ]
  },
  { path: '**', redirectTo: 'produtos' } // Rota coringa para 404
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
