import { Injectable } from '@angular/core';
import  data  from '../../assets/data';
import { Observable, Subject } from 'rxjs';
import { productInfo } from '../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  count: any = {};
  subject = new Subject<productInfo[]>();
  data :any[] = [];

  constructor() {}

  getCount():object{
    data.forEach(el => {
      this.count[el.brand] = (this.count[el.brand] || 0) + 1
    });
    return this.count;
  }

  getProducts():productInfo[]{
    this.subject.subscribe(data => this.data = data);
    this.subject.next(data);
    return this.data;
  }

  filter(brands:any):productInfo[]{
    if(brands.length === 0 ) {
      return this.getProducts();
    }
    this.subject.subscribe(data => this.data = data);
    this.data = data.filter(el => brands.indexOf(el.brand) > -1);
    this.subject.next(this.data);
    return this.data;
  }

  getProductsObs(): Observable<any> {
    return this.subject.asObservable();
}

}
