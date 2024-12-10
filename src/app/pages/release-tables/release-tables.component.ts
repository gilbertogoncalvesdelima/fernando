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
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-release-tables',
  templateUrl: './release-tables.component.html',
  styleUrls: ['./release-tables.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReleaseTablesComponent {
  selectedRoute: string = 'manual-postings';

  constructor(private router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate([`/release-tables/${route}`]);
  }
}


@NgModule({
  declarations: [ReleaseTablesComponent],
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
  exports: [ReleaseTablesComponent],

})
export class ReleaseTablesComponentModule { }