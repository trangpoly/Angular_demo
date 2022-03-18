import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // products = [{
  //   name: 'hihi',
  //   price: 200,
  //   desc: 'haha',
  //   id: 1
  // }];
  products = new Array();
  newProduct = {
    name: '',
    price: 0,
    desc: '',
    id: 0
  };
  // productEdit = {
  //   name: '',
  //   price: 0,
  //   desc: '',
  //   id: 0
  // };
  onSubmit(product: any){
    // console.log(product);
    if(this.newProduct.id){
      console.log(this.products);
      let index = this.newProduct.id-1;

      this.products.splice(index,1,this.newProduct);
      console.log(this.products);
      this.newProduct = {
        name: '',
        price: 0,
        desc: '',
        id: 0
      };
    }
    else {
      this.newProduct = {
        ...this.newProduct,
        id: this.products.length + 1,
        name: product.name,
        price: Number(product.price),
        desc: product.desc
      }
      this.products.push(this.newProduct);
      // console.log(this.products);
      this.newProduct = {
        name: '',
        price: 0,
        desc: '',
        id: 0
      };

    }
    
  }
  onEdit(id:number){
    // console.log(this.newProduct);
    console.log(this.products);
    this.newProduct = {
      ...this.products[id - 1]
    }
    console.log(this.newProduct);
  }
}
