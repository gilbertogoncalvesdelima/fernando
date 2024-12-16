import { Component, ViewChild } from '@angular/core';
import { TableColumn } from 'src/app/shared/model/table';
import { PRODUCT_GROUPING_COLUMNS } from './model/table.model';
import { ProductGroupingService } from './service/product-grouping.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-agrupamento-produtos',
  templateUrl: './agrupamento-produtos.component.html',
  styleUrls: ['./agrupamento-produtos.component.scss']
})
export class AgrupamentoProdutosComponent {
  configTable: TableColumn[] =  PRODUCT_GROUPING_COLUMNS;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  currentPage: number = 0;
  pageSize: number = 10;

  constructor(private productGroupingService: ProductGroupingService) {
    this.displayedColumns = this.configTable.map(col => col.property);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.fetchProductGrouping(this.currentPage, this.pageSize);
  }

  fetchProductGrouping(page: number, size: number): void {
    this.productGroupingService.getProductGrouping(page, size).subscribe(
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
