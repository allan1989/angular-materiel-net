import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Subscription } from 'rxjs';
import { productInfo } from 'src/assets/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = 'toto'; 
  public products: productInfo[] = [];
  public subscription: Subscription;
  constructor(private ProductsService: ProductsService){
    this.subscription = this.ProductsService.getProductsObs().subscribe(el => this.products = el)
  }

  ngOnInit() {
    this.products = this.ProductsService.getProducts();
  }

  onSort($event:any):productInfo[] {
    switch($event.target.value) {
      case 'brand' :
        return this.ProductsService.subject.value.sort((a,b) => {
          if(a.brand.toLowerCase() > b.brand.toLowerCase()) return 1;
          if(a.brand.toLowerCase() < b.brand.toLowerCase()) return -1;
          return 0
        })
        case 'asc':
          return this.ProductsService.subject.value.sort((a,b) => a.price - b.price)
        case 'desc':
          return this.ProductsService.subject.value.sort((a,b) => b.price - a.price)
        case 'reviews':
          return this.ProductsService.subject.value.sort((a,b) => b.customerReview - a.customerReview)  
        default:
          return this.products 
    }
  }
}
