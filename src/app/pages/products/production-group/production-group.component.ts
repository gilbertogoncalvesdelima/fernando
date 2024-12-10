import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/components/content/table/table.types';
import { PRODUCTION_GROUP_COLUMNS, PRODUCTION_GROUP_DATA } from './model/table.model';

@Component({
  selector: 'app-production-group',
  templateUrl: './production-group.component.html',
  styleUrls: ['./production-group.component.scss']
})
export class ProductionGroupComponent {
  configTable: TableColumn[] =  PRODUCTION_GROUP_COLUMNS;
  tableData: any[] = PRODUCTION_GROUP_DATA;

}
