import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpComunicationService } from '../../services/http-comunication.service';
import { map } from 'rxjs';


@Component({
  selector: 'mfee-project-filter-button-group',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [HttpComunicationService],
  templateUrl: './filter-button-group.component.html',
  styleUrl: './filter-button-group.component.scss'
})
export class FilterButtonGroupComponent {
  titles: any[] = [];

  constructor(public _http: HttpComunicationService) {}

  // getAllData() {
  //   this._http.getAllData().subscribe((x) => {
  //     console.log(x);
  //   });
  // }

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
        console.log(x);
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
        console.log(x);
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
        console.log(x);
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
        console.log(x);
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
        console.log(x);
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
        console.log(x);
      });
  }
}
