import { Component, ViewChild } from '@angular/core';
import { PRODUCT_TYPE_COLUMNS } from './model/table.model';
import { ProductTypeService } from './service/product-type.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from 'src/app/shared/model/table';

@Component({
  selector: 'app-tipo-produto',
  templateUrl: './tipo-produto.component.html',
  styleUrls: ['./tipo-produto.component.scss']
})
export class TipoProdutoComponent{

  configTable: TableColumn[] =  PRODUCT_TYPE_COLUMNS;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  currentPage: number = 0;
  pageSize: number = 10;


  constructor(private productTypeService: ProductTypeService) {
    this.displayedColumns = this.configTable.map(col => col.property);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.fetchProductType(this.currentPage, this.pageSize);
  }

  fetchProductType(page: number, size: number): void {
    this.productTypeService.getProductType(page, size).subscribe(
      (response) => {
        const datastate = structuredClone(response.content);
        this.dataSource.data = [...datastate];
      },
      (error) => {
        console.error('Erro ao buscar agrupamento de empresas:', error);
      }
    );
  }

}
