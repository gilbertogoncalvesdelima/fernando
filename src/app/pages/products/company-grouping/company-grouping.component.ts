import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/components/content/table/table.types';
import { COMPANY_GROUPING_COLUMNS, COMPANY_GROUPING_DATA } from './model/table.model';
import { CompanyGroupingService } from './service/company-grouping.service';

@Component({
  selector: 'app-company-grouping',
  templateUrl: './company-grouping.component.html',
  styleUrls: ['./company-grouping.component.scss']
})
export class CompanyGroupingComponent {
  configTable: TableColumn[] =  COMPANY_GROUPING_COLUMNS;
  tableData: any[] = COMPANY_GROUPING_DATA;
  currentPage: number = 0;
  pageSize: number = 10;

  constructor(private companyGroupingService: CompanyGroupingService) {}

  ngOnInit(): void {
    this.fetchCompanyGrouping(this.currentPage, this.pageSize);
  }

  fetchCompanyGrouping(page: number, size: number): void {
    this.companyGroupingService.getCompanyGrouping(page, size).subscribe(
      (response) => {
        this.tableData = response.content || [];
      },
      (error) => {
        console.error('Erro ao buscar agrupamento de empresas:', error);
      }
    );
  }
}
