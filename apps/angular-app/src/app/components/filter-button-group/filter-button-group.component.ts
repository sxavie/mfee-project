import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpComunicationService } from '../../services/http-comunication.service';
import { map } from 'rxjs';
import { travel } from '../../interfaces/interfaces';


@Component({
  selector: 'mfee-project-filter-button-group',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [HttpComunicationService],
  templateUrl: './filter-button-group.component.html',
  styleUrl: './filter-button-group.component.scss'
})
export class FilterButtonGroupComponent implements OnInit{
  titles: any[] = [];
  @Output() worldInfoEvent = new EventEmitter()
  travelInfo: travel

  constructor(public _http: HttpComunicationService) {}

  // getAllData() {
  //   this._http.getAllData().subscribe((x) => {
  //     console.log(x);
  //   });
  // }

  ngOnInit() {
    this.sendWorldInfo();
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
  }
}
