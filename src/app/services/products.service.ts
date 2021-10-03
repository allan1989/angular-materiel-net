import { Injectable } from '@angular/core';
import  data  from '../../assets/data';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { productInfo } from '../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  count: any = {};
  subject = new BehaviorSubject<productInfo[]>(data);
  data: productInfo[] = [];
  sortOption: string = 'brand';

  constructor() {}

  getCount():object{
    this.subject.value.forEach(el => {
      this.count[el.brand] = (this.count[el.brand] || 0) + 1
    });
    return this.count;
  }

  getProducts():productInfo[]{
    this.subject.next(this.sortProducts(data, this.sortOption));
    return this.subject.getValue();
  }

  filter(brands:any):productInfo[]{
    if(brands.length === 0 ) {
      return this.getProducts();
    }
    this.data = data.filter(el => brands.indexOf(el.brand) > -1);
    this.subject.next(this.sortProducts(this.data, this.sortOption));
    return this.subject.getValue();
  }

  getProductsObs(): Observable<productInfo[]> {
    return this.subject.asObservable();
  }

  sortProducts(arr: productInfo[], sorting:string):productInfo[] {
    switch(sorting) {
      case 'brand' :
        this.sortOption = sorting;
        return arr.sort((a,b) => {
          if(a.brand.toLowerCase() > b.brand.toLowerCase()) return 1;
          if(a.brand.toLowerCase() < b.brand.toLowerCase()) return -1;
          return 0
        })
        case 'asc':
          this.sortOption = sorting;
          return arr.sort((a,b) => a.price - b.price)
        case 'desc':
          this.sortOption = sorting;
          return arr.sort((a,b) => b.price - a.price)
        case 'reviews':
          this.sortOption = sorting;
          return arr.sort((a,b) => b.customerReview - a.customerReview)  
        default:
          return arr 
    }
  }

}
