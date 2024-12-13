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

  displayedColumns: string[] = [
    'SG_EMPRE',
    'DT_CTBIL',
    'VL_PREMT',
    'tp',
    'agencia',
    'CD_PRODUTO',
    'grupo',
    'CD_CNAPE',
    'QT_PREMT'
  ];


  dataSource = new MatTableDataSource<any>([]);

  tpOptions = ['Opção 1', 'Opção 2', 'Opção 3'];
  totalDebito = '0,00';
  totalDebito2 = '0,00';
  totalCredito = '0,00';
  ultimaAlteracao = '02/12/2024';
  empresa = '0';

constructor(private manualPostingsService: ManualPostingsService ){
  //Aqui recebe o valor armazenado no service
  manualPostingsService.fileUploadState.subscribe(file => {
    this.dataSource.data  = [...file]
  })
}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  pageChanged(event: any) {
    console.log(event);
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
