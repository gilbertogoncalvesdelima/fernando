import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/components/content/table/table.types';
import { PRODUCT_GROUPING_COLUMNS, PRODUCT_GROUPING_DATA } from './model/table.model';

@Component({
  selector: 'app-product-grouping',
  templateUrl: './product-grouping.component.html',
  styleUrls: ['./product-grouping.component.scss']
})
export class ProductGroupingComponent {
  configTable: TableColumn[] =  PRODUCT_GROUPING_COLUMNS;
  tableData: any[] = PRODUCT_GROUPING_DATA;
}
