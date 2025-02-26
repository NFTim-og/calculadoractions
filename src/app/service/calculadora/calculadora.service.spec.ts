import { TestBed } from '@angular/core/testing';
import { CalculadoraService } from '../calculadora/calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    expect(service.suma(2, 3)).toBe(5);
  });

  it('should subtract two numbers correctly', () => {
    expect(service.resta(5, 3)).toBe(2);
  });

  it('should multiply two numbers correctly', () => {
    expect(service.multiplicacio(2, 3)).toBe(6);
  });

  it('should divide two numbers correctly', () => {
    expect(service.divisio(6, 3)).toBe(2);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => service.divisio(6, 0)).toThrowError('No es pot dividir per zero');
  });
});
