import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = 'toto'; 
  public products: any[] = [];
  public subscription: Subscription;
  constructor(private ProductsService: ProductsService){
    this.subscription = this.ProductsService.getProductsObs().subscribe(el => this.products = el)
  }

  ngOnInit() {
    this.products = this.ProductsService.getProducts();
  }

}
