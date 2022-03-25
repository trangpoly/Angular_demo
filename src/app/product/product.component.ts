import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';

import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any;
  constructor(
    private ps: ProductService,
    ) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }
  newProduct = {
    name: '',
    price: 0,
    desc: '',
    id: 0
  };
  onEdit(id:number){
    // console.log(this.newProduct);
    console.log(this.products);
    this.newProduct = {
      ...this.products[id - 1]
    }
    console.log(this.newProduct);
  }
  onGetList(){
    this.ps.getProducts().subscribe(data => {
      this.products = data  
    })
  }
  onDelete(id: number | string){
    console.log(id);
    this.ps.deleleProduct(id).subscribe( data => {
      this.onGetList();
    }
    );
  }
}
