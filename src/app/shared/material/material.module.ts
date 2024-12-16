import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTreeModule} from '@angular/material/tree';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';

@NgModule({

  declarations: [

  ],

  imports: [
    CommonModule
  ],

  exports: [
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatMenuModule, 
    MatDatepickerModule, 
    MatFormFieldModule, 
    MatNativeDateModule, 
    MatInputModule, 
    MatExpansionModule, 
    MatSelectModule,
    MatSlideToggleModule, 
    MatDialogModule, 
    MatTreeModule, 
    MatCheckboxModule, 
    MatSliderModule, 
    MatDividerModule, 
    MatTooltipModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatListModule
  ],

})
export class MaterialModule { }
