import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UsersTableDataSource, UsersTableItem } from './users-table-datasource';
import { MatDialog } from '@angular/material/dialog';
import { AddUsersFormComponent } from '../add-users-form/add-users-form.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<UsersTableItem>;
  dataSource: UsersTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'atomic_weight'];

  constructor(public dialog: MatDialog) {
    this.dataSource = new UsersTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUsersFormComponent, {
      width: '800px',
    });
  }
}
