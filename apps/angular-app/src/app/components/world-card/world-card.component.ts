import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpComunicationService } from '../../services/http-comunication.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'mfee-project-world-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, HttpClientModule],
  providers: [HttpComunicationService],
  templateUrl: './world-card.component.html',
  styleUrl: './world-card.component.scss'
})
export class WorldCardComponent implements OnInit {
  title: string;
  comments: string;
  description: string;
  imageUrl: string;
  @Input() cardData;

  constructor(public _http: HttpComunicationService) {}
  ngOnInit() {
    
    this.title = 'mi primer titulo';
    this.comments = 'mi primer comments';
    this.description = 'mi primer description';
    this.imageUrl = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  }

  refresh(){
    this.title = this.cardData[0].title;
    this.comments = this.cardData[0].comments;
    this.description = this.cardData[0].description;
    this.imageUrl = this.cardData[0].url;
  }
}
