import { Component, OnInit, ViewChild } from '@angular/core';
import { TableColumn } from 'src/app/shared/model/table';

import { AgrupamentoEmpresasService } from './service/agrupamento-empresas.service';
import { COMPANY_GROUPING_COLUMNS } from './model/table.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-agrupamento-empresas',
  templateUrl: './agrupamento-empresas.component.html',
  styleUrls: ['./agrupamento-empresas.component.scss']
})
export class AgrupamentoEmpresasComponent implements OnInit {
  configTable: TableColumn[] = COMPANY_GROUPING_COLUMNS;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  currentPage: number = 0;
  totalPages: number = 0;
  totalElements: number = 0;
  pageSize: number = 10;

  constructor(private AgrupamentoEmpresasService: AgrupamentoEmpresasService) {
    this.displayedColumns = this.configTable.map(col => col.property);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.loadTableData();
  }

  loadTableData(): void {
    this.AgrupamentoEmpresasService.getAgrupamentoEmpresas(this.currentPage, this.pageSize).subscribe(response => {
      this.totalPages = response.totalPages;
      this.totalElements = response.totalElements;
      const datastate = structuredClone( response.content.map((item: any) => ({
        sgEmprePremt: item.sgEmprePremt,
        dsTipoPropm: item.dsTipoPropm,
        cdAgrmtPropm: item.cdAgrmtPropm,
        dsAgrmtPropm: item.dsAgrmtPropm,
        tpPropm: item.tpPropm,
        campoDuvida: item.campoDuvida,
        icCadtrObjtv: item.icCadtrObjtv,
        cdUsuroUltmaAlter: item.cdUsuroUltmaAlter,
        dtUltmaAlter: new Date(item.dtUltmaAlter).toLocaleDateString(),
      })));
      this.dataSource.data = [...datastate];
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadTableData();
  }
}
