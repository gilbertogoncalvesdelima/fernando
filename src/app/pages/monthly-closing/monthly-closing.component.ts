import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-monthly-closing',
  templateUrl: './monthly-closing.component.html',
  styleUrls: ['./monthly-closing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MonthlyClosingComponent {

}

@NgModule({
  declarations: [MonthlyClosingComponent],
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
    MonthlyClosingComponent,
  ],

})
export class MonthlyClosingComponentModule { }