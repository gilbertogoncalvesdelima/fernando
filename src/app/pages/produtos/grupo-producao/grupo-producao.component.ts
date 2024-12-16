import { Component, ViewChild } from '@angular/core';
import { TableColumn } from 'src/app/shared/model/table';
import { PRODUCTION_GROUP_COLUMNS } from './model/table.model';
import { ProductionGroupService } from './service/production-group.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grupo-producao',
  templateUrl: './grupo-producao.component.html',
  styleUrls: ['./grupo-producao.component.scss']
})
export class GrupoProducaoComponent {
  configTable: TableColumn[] =  PRODUCTION_GROUP_COLUMNS;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  currentPage: number = 0;
  pageSize: number = 10;

  constructor(private productionGroupService: ProductionGroupService) {
    this.displayedColumns = this.configTable.map(col => col.property);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.fetchProductionGroup(this.currentPage, this.pageSize);
  }

  fetchProductionGroup(page: number, size: number): void {
    this.productionGroupService.getProductionGroup(page, size).subscribe(
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
