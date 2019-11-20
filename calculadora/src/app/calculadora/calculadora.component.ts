import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent  {
  valor1: number =0;
  valor2: number =0;
  resultado: number=0;

  constructor() { this.resultado=this.valor1+this.valor2;}


  asignarV1(event:Event)
  {
   this.valor1=parseInt((<HTMLInputElement>event.target).value);
   this.resultado=this.valor1+this.valor2;
  }
  asignarV2(event:Event)
  {
    this.valor2=parseInt((<HTMLInputElement>event.target).value);
    this.resultado=this.valor1+this.valor2;
  }

}
