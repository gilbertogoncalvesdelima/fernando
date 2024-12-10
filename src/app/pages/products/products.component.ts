import { Component } from '@angular/core';
import { ProductTypeComponent } from './product-type/product-type.component';
import { ProductWalletComponent } from './product-wallet/product-wallet.component';
import { ProductGroupingComponent } from './product-grouping/product-grouping.component';
import { CompanyGroupingComponent } from './company-grouping/company-grouping.component';
import { ProductionGroupComponent } from './production-group/production-group.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProdutosComponent {
  tabs = [
    {
      title: 'TIPO PRODUTO',
      component: ProductTypeComponent,
    },
    {
      title: 'CARTEIRA PRODUTOS',
      component: ProductWalletComponent,
    },
    {
      title: 'AGRUPAMENTO PRODUTOS',
      component: ProductGroupingComponent,
    },
    {
      title: 'AGRUPAMENTO EMPRESAS',
      component: CompanyGroupingComponent,
    },
    {
      title: 'GRUPO DE PRODUÇÃO',
      component: ProductionGroupComponent,
    }
  ];
}
