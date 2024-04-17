import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpComunicationService } from '../../services/http-comunication.service';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
import { travel } from '../../interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { EditDeleteCardComponent } from '../../dialogs/edit-delete-card/edit-delete-card.component';

@Component({
  selector: 'mfee-project-world-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, HttpClientModule, MatIconModule],
  providers: [HttpComunicationService],
  templateUrl: './world-card.component.html',
  styleUrl: './world-card.component.scss'
})
export class WorldCardComponent implements OnInit {
  title: string;
  comments: string;
  description: string;
  url: string;
  cards: any;
  @Input() cardData;
  @Output() worldInfoEvent = new EventEmitter()
  travelInfo: travel

  constructor(public _http: HttpComunicationService, public dialog: MatDialog) {}
  ngOnInit() {
    this.title = 'mi primer titulo';
    this.description = 'mi primer description';
    this.url = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    this.refresh()
  }

  refresh() {
    this.cards = this.travelInfo;
  }

  openDialog(card, name) {
    this.dialog.open(EditDeleteCardComponent ,{ disableClose: true, data: {card, name} });
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
        this.travelInfo = x
        this.sendWorldInfo();
      });
  }

  getAllTravelData() {
    return this._http
      .getAllData()
      .pipe(
        map((response: any) => 
          response.filter((item: any) => item.category === 'Travel')
      )
      )
      .subscribe((x) => {
        this.travelInfo = x
        this.sendWorldInfo();
      });
  }

  getAllLifestyleData() {
    return this._http
      .getAllData()
      .pipe(
        map((response: any) => 
          response.filter((item: any) => item.category === 'Lifestyle')
      )
      )
      .subscribe((x) => {
        this.travelInfo = x
        this.sendWorldInfo();
      });
  }

  getAllBusinessData() {
    return this._http
      .getAllData()
      .pipe(
        map((response: any) => 
          response.filter((item: any) => item.category === 'Business')
      )
      )
      .subscribe((x) => {
        this.travelInfo = x
        this.sendWorldInfo();
      });
  }

  getAllFoodData() {
    return this._http
      .getAllData()
      .pipe(
        map((response: any) => 
          response.filter((item: any) => item.category === 'Food')
      )
      )
      .subscribe((x) => {
        this.travelInfo = x
        this.sendWorldInfo();
      });
  }

  getAllWorkData() {
    return this._http
      .getAllData()
      .pipe(
        map((response: any) => 
          response.filter((item: any) => item.category === 'Work')
      )
      )
      .subscribe((x) => {
        this.travelInfo = x
        this.sendWorldInfo();
      });
  }

  sendWorldInfo() {
    this.worldInfoEvent.emit({ mensaje: this.travelInfo })
    console.log(this.travelInfo)
    setTimeout(() => {
      this.refresh()
    }, 100);
  }
}
