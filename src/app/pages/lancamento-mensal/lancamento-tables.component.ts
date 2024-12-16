import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import * as XLSX from 'xlsx';
import { ManualPostingsService } from './lancamento-manual/manual-postings.service';

@Component({
  selector: 'app-lancamento-tables',
  templateUrl: './lancamento-tables.component.html',
  styleUrls: ['./lancamento-tables.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LancamentoTablesComponent {
  selectedRoute: string = 'lancamento-manual';

  constructor(private router: Router, private manualPostingsService: ManualPostingsService) { }

  navigateTo(route: string): void {
    this.router.navigate([`/lancamento-tables/${route}`]);
  }

  uploadfile(ev: any): void {
    let workBook: any = null;
    let jsonData:any[] = [];
    const reader = new FileReader();
    const file = ev.target.files[0];
    //upload
    reader.onload = (event) => {
      const data = reader.result;

      // Lê o conteúdo do arquivo XLSX
      workBook = XLSX.read(data, { type: 'binary' });

      // Itera sobre todas as abas (SheetNames) da planilha
      workBook.SheetNames.forEach((name: string) => {
        const sheet = workBook.Sheets[name];

        // Converte cada aba em um array de objetos e concatena no array principal
        const sheetData = XLSX.utils.sheet_to_json(sheet);
        jsonData = jsonData.concat(sheetData);
      });

      // Aqui você pode enviar os dados para o serviço
      this.manualPostingsService.fileUploadState = jsonData; // Substitui o dado serializado pelo array de objetos
    };
    reader.readAsBinaryString(file);
  }
}


@NgModule({
  declarations: [LancamentoTablesComponent],
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
    FormsModule,
    RouterModule
  ],
  exports: [LancamentoTablesComponent],

})
export class LancamentoTablesComponentModule { }
