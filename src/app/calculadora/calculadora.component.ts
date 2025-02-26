import { Component } from '@angular/core';
import { CalculadoraService } from '../service/calculadora/calculadora.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  result: number = 0;
  num1: number = 0;
  num2: number = 0;
  error: string = '';

  constructor(private calculadoraService: CalculadoraService) {}

  suma() {
    this.result = this.calculadoraService.suma(this.num1, this.num2);
  }

  resta() {
    this.result = this.calculadoraService.resta(this.num1, this.num2);
  }

  multiplicacio() {
    this.result = this.calculadoraService.multiplicacio(this.num1, this.num2);
  }

  divisio() {
    try {
      this.result = this.calculadoraService.divisio(this.num1, this.num2);
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.error = error.message;  
      } else {
        this.error = "Unknown error occurred";  
      }
    }
    
  }
}
