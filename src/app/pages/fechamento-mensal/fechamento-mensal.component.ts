import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-fechamento-mensal',
  templateUrl: './fechamento-mensal.component.html',
  styleUrls: ['./fechamento-mensal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FechamentoMensalComponent {

}

@NgModule({
  declarations: [FechamentoMensalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    FechamentoMensalComponent,
  ],

})
export class FechamentoMensalComponentModule { }