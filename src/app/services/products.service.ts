import { Injectable } from '@angular/core';
import  data  from '../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  count: any = {};

  constructor() {}

  getCount():object{
    data.forEach(el => {
      this.count[el.brand] = (this.count[el.brand] || 0) + 1
    });
    return this.count;
  }

}
