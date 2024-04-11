import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empleado',
})
export class EmpleadoPipe implements PipeTransform {
  transform(nombre: string, empresa: string, puesto: string): unknown {
    let empresa_pipe = empresa;
    let puesto_pipe = puesto;

    let texto: string = `El empleado ${nombre} trabaja en ${empresa_pipe} como ${puesto_pipe}`;

    return texto;
  }
}
