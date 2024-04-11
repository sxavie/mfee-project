import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfee-project-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  public empleados: Array<String>;
  public nombre: string;
  public edad: number;
  public comparador: boolean;
  public gb: string;
  public colorSeleccionado: string;
  public colorTexto: string;
  public colorTexto3: string;
  public claseSeleccionada: string;
  public miCalculo: number;
  public Dan: string; 
  public customColor: string;

  constructor() {
    this.empleados = ["Antonio", "Mauricio", "Carlos"];
    this.nombre = "Mauricio";
    this.comparador = true;
    this.gb = "blue";
    this.claseSeleccionada = "clase2";
    this.Dan = "Sajaropulos";
    this.customColor = "green";
    console.log("este es mi constructor");
  }

  ngOnInit(): void {
    console.log("este es ngOInit");
  }

  ngOnDestroy() {
    console.log("este es ngOnDestroy");
  }

  comparar() {
    if (this.comparador === true) {
      this.comparador = false;
      this.claseSeleccionada = "clase1";
    } else {
      this.comparador = true;
      this.claseSeleccionada = "clase2";
    }
  }

  cambio_color(color: string) {
    if (color === "azul") {
      this.colorSeleccionado = "azul";
    } else if (color === "rojo") {
      this.colorSeleccionado = "rojo";
    } else if (color === "verde") {
      this.colorSeleccionado = "verde";
    }
  }

  setColor() {
    this.colorTexto3 = this.colorTexto;
  }
}
