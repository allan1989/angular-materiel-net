import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = 'toto'; 
  public products: any[] = [];
  constructor(private ProductsService: ProductsService){}

  ngOnInit() {
    this.products = this.ProductsService.getProducts();
    console.log(this.products)
  }
}
