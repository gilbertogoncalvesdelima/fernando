import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, NgModule, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ManualPostingsService } from './manual-postings.service';
import { LancamentoManualService } from './service/lancamento-manual.service';

@Component({
  selector: 'app-lancamento-manual',
  templateUrl: './lancamento-manual.component.html',
  styleUrls: ['./lancamento-manual.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LancamentoManualComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 5;
  pageSizeOptions = [5, 10, 25, 100];

  currentPage: number = 0;

  displayedColumns: string[] = [
    'emp',
'data',
'valor',
'tp',
'agencia',
'produto',
'grupo',
'cenape',
'qtd'
  ];


  dataSource = new MatTableDataSource<any>([]);

  tpOptions = ['Opção 1', 'Opção 2', 'Opção 3'];
  totalDebito = '0,00';
  totalDebito2 = '0,00';
  totalCredito = '0,00';
  ultimaAlteracao = '02/2010';
  empresa = '0';

constructor(private manualPostingsService: LancamentoManualService ){

}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  pageChanged(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
    this.fetchProductType();
  }

  fetchProductType(): void {
    this.manualPostingsService.getLancamentoManual(this.ultimaAlteracao).subscribe(
      (response) => {
        const datastate = structuredClone(response.map((obj: any) => ({...obj, data: this.formattedDate(obj.data)})));
        this.dataSource.data = [...datastate];
      },
      (error) => {
        console.error('Erro ao buscar agrupamento de empresas:', error);
      }
    );
  }

  formattedDate(data: string): string {
    if (!data) return ''; // Caso a data seja nula ou indefinida
    const [day, month, year] = data.split('/'); // Divide no formato DD/MM/YYYY
    return `${year}-${month}-${day}`; // Reorganiza no formato YYYY-MM-DD
  }

}

@NgModule({
  declarations: [LancamentoManualComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatToolbarModule,
    MatPaginatorModule,
    FormsModule
  ],
  exports: [LancamentoManualComponent],
})
export class LancamentoManualComponentModule { }
