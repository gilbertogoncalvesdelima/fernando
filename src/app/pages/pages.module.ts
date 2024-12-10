import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerModule } from '../shared/components/container/container.module';
import { ContentModule } from '../shared/components/content/content.module';
import { ProdutosComponent } from './products/products.component';
import { ProductTypeComponent } from './products/product-type/product-type.component';
import { ProductWalletComponent } from './products/product-wallet/product-wallet.component';
import { ProductGroupingComponent } from './products/product-grouping/product-grouping.component';
import { CompanyGroupingComponent } from './products/company-grouping/company-grouping.component';
import { ProductionGroupComponent } from './products/production-group/production-group.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProductTypeComponent,
    ProductWalletComponent,
    ProductGroupingComponent,
    CompanyGroupingComponent,
    ProductionGroupComponent,
  ],
  imports: [
    CommonModule,
    ContainerModule,
    ContentModule
  ],
  exports: [
    ProdutosComponent,
  ]
})
export class PagesModule { }
