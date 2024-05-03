import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HttpComunicationService } from '../../services/http-comunication.service';
import { map } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { EditDeleteCardComponent } from '../../dialogs/edit-delete-card/edit-delete-card.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'mfee-project-categories',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title', 'description', 'actions'];
  travelInfo: any;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  cardData;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router, public _http: HttpComunicationService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    return this._http
      .getAllData()
      .pipe(
        map((response: any) =>
          response.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            category: item.category,
            url: item.url
          }))
        )
      )
      .subscribe((x) => {
        this.travelInfo = x;
        this.dataSource = new MatTableDataSource<any>(x);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  navTo(route) {
    this.router.navigate(['/login']);
    switch (route) {
      case 'login':
        console.log('to login');
        this.router.navigate(['/login']);
        break;
      case 'categories':
        console.log('to categories');
        this.router.navigate(['/categories']);
        break;
      case 'categories-list':
        console.log('to categories list');
        this.router.navigate(['/categories-list']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }

  openDialog(card, name) {
    this.dialog.open(EditDeleteCardComponent, { disableClose: true, data: { card, name } });
  }
}
