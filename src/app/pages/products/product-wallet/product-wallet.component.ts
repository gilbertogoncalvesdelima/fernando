import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/components/content/table/table.types';
import { PRODUCT_WALLET_COLUMNS, PRODUCT_WALLET_DATA } from './model/table.model';

@Component({
  selector: 'app-product-wallet',
  templateUrl: './product-wallet.component.html',
  styleUrls: ['./product-wallet.component.scss']
})
export class ProductWalletComponent {
  configTable: TableColumn[] = PRODUCT_WALLET_COLUMNS;
  tableData: any[] = PRODUCT_WALLET_DATA;
}
