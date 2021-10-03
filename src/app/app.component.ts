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
  public products: productInfo[] = [];
  public subscription: Subscription;
  constructor(private ProductsService: ProductsService){
    this.subscription = this.ProductsService.getProductsObs().subscribe(data => this.products = data)
  }

  ngOnInit() {
    this.products = this.ProductsService.getProducts();
  }

  onSort($event:any) {
    this.ProductsService.sortProducts(
      this.ProductsService.subject.getValue(),
      $event.target.value
    )
  }
}
