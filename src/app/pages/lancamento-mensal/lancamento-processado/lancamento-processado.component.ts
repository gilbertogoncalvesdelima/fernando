import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditModalComponent } from '../../lancamento-mensal/lancamento-processado/edit-modal/edit-modal.component';

@Component({
  selector: 'app-lancamento-processado',
  templateUrl: './lancamento-processado.component.html',
  styleUrls: ['./lancamento-processado.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LancamentoProcessadoComponent {
  displayedColumns: string[] = [
    'emp',
    'data',
    'valor',
    'tp',
    'agencia',
    'produto',
    'grupo',
    'cenape',
    'quantidade',
  ];

  dataSource = new MatTableDataSource([
    { emp: '001', data: '01/12/2024', valor: '100,00', tp: '', agencia: '001', produto: 'A', grupo: 'G1', cenape: '123', quantidade: 10 },
    { emp: '002', data: '02/12/2024', valor: '200,00', tp: '', agencia: '002', produto: 'B', grupo: 'G2', cenape: '456', quantidade: 5 },
    { emp: '003', data: '02/12/2024', valor: '200,00', tp: '', agencia: '002', produto: 'B', grupo: 'G2', cenape: '456', quantidade: 5 },
    { emp: '004', data: '02/12/2024', valor: '200,00', tp: '', agencia: '002', produto: 'B', grupo: 'G2', cenape: '456', quantidade: 5 },
    { emp: '005', data: '02/12/2024', valor: '200,00', tp: '', agencia: '002', produto: 'B', grupo: 'G2', cenape: '456', quantidade: 5 },
    { emp: '006', data: '02/12/2024', valor: '200,00', tp: '', agencia: '002', produto: 'B', grupo: 'G2', cenape: '456', quantidade: 5 },
    { emp: '007', data: '02/12/2024', valor: '200,00', tp: '', agencia: '002', produto: 'B', grupo: 'G2', cenape: '456', quantidade: 5 },
    { emp: '008', data: '02/12/2024', valor: '200,00', tp: '', agencia: '002', produto: 'B', grupo: 'G2', cenape: '456', quantidade: 5 },
  ]);

  tpOptions = ['Opção 1', 'Opção 2', 'Opção 3'];
  totalDebito = '0,00';
  totalDebito2 = '0,00';
  totalCredito = '0,00';
  ultimaAlteracao = '02/12/2024';
  empresa = '0';

  constructor(private dialog: MatDialog) {}

  editRow(row: any) {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '400px',
      data: row,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Dialog closed with result:', result);
      }
    });
  }
}

@NgModule({
  declarations: [LancamentoProcessadoComponent, EditModalComponent],
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
    MatDialogModule,
    FormsModule,
  ],
  exports: [LancamentoProcessadoComponent],
})
export class LancamentoProcessadoComponentModule {}