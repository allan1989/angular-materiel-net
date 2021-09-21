import { Injectable } from '@angular/core';
import  data  from '../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products = data;
}
