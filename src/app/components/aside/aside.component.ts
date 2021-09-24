import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  count:any = [];
  selection:any[] = [];

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.count = this.ProductsService.getCount();
  }
  handleBrandSelection($event:any) {
    let currentValue = $event.target.value;
    if(this.selection.indexOf(currentValue) === -1) {
      this.selection.push(currentValue)
    }else{
      this.selection = this.selection.filter(item => item !== currentValue)
    }
  }
  submitBrandSelection($event:any){
    $event.preventDefault();
    console.log(this.selection)
  }

}
