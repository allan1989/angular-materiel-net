import { Injectable } from '@angular/core';
import { productInfo } from '../../assets/data';
import  data  from '../../assets/data';

type obj = {
  name: string,
  count: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}

  getBrands(){    

      return data.map(el => el.brand).filter((el,i,arr) => arr.indexOf(el) === i);
  }

}
