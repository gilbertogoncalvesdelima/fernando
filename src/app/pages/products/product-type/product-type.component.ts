import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/components/content/table/table.types';
import { PRODUCT_TYPE_COLUMNS, PRODUCT_TYPE_DATA } from './model/table.model';
import { ProductTypeService } from './service/product-type.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent{

  configTable: TableColumn[] =  PRODUCT_TYPE_COLUMNS;
  tableData: any[] = PRODUCT_TYPE_DATA;
  currentPage: number = 0;
  pageSize: number = 10;

  constructor(private productTypeService: ProductTypeService) {}

  ngOnInit(): void {
    this.fetchProductType(this.currentPage, this.pageSize);
  }

  fetchProductType(page: number, size: number): void {
    this.productTypeService.getProductType(page, size).subscribe(
      (response) => {
        console.log(response.content);

        this.tableData = response.content;
      },
      (error) => {
        console.error('Erro ao buscar agrupamento de empresas:', error);
      }
    );
  }

}
