import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from './table.types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent {
  @Input() configTable: TableColumn[] = [];
  @Input() data: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);

  ngOnInit() {
    this.displayedColumns = this.configTable.map(col => col.property);
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getRowClass(index: number, textAlignment: string | undefined): string {
    let classes = index % 2 === 0 ? 'odd-row' : 'even-row';
    if (textAlignment) {
      classes += ` ${textAlignment}`;
    } else {
      classes += ' left';
    }
    return classes;
  }
  
}
