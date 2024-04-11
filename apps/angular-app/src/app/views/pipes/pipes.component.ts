import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfee-project-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  nombreCompleto: string;
  nombre: string;
  puesto: string;
  fechaInicio: Date;
  asistencia: number;
  PI: number;
  sueldo: number;
  miObjeto: Object | any;
  empresa: string;
  moneda: string;
  n1: number;
  n2: number;
  alumno: string;
  escuela: string;
  grado: number;

  elemento1: number = 5.1;
  elemento2: number = 2.9;

  constructor(
  ) {
    this.n1 = 15;
    this.n2 = 3;
    this.moneda = "MXN";
    this.nombreCompleto = "mauricio delgado franco";
    this.nombre = "Mauricio";
    this.puesto = "ing front end";
    this.empresa = "Accenture";
    this.fechaInicio = new Date();
    this.asistencia = 0.95;
    this.PI = 3.141592;
    this.sueldo = 60000;
    this.miObjeto = {
      animal: "perro",
      raza: "Pastor Aleman",
      datos: { edad: 3, color: "negro" }
    };
    this.alumno = "Carlos";
    this.escuela = "FJR";
    this.grado = 12;

  }
}
