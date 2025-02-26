import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  suma(a: number, b: number): number {
    return a + b;
  }

  resta(a: number, b: number): number {
    return a - b;
  }

  multiplicacio(a: number, b: number): number {
    return a * b;
  }

  divisio(a: number, b: number): number {
    if (b === 0) {
      throw new Error('No es pot dividir per zero');
    }
    return a / b;
  }
}

