import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productDetail: any;
  id: any
  constructor(
    private activeRouter: ActivatedRoute, //Sử dụng để lấy id trên url
    private ps: ProductService,
    private router: Router //Sử dụng để điều hướng
  ) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params['id'];
    if(this.id !== undefined){
      this.ps.getProduct(this.id).subscribe(data => {
      this.productDetail = data;
    })
    }
    else {
      this.productDetail = {
        name: "",
        price: 0,
        desc: ""
      };
    }
  }
  onUpdate(obj: any){
    // console.log(obj);
    if(this.id !== undefined){
      this.ps.updateProduct(this.id, obj).subscribe(); //Nhận dữ liệu từ Form và tiến hành call API
      this.router.navigate(['/product']); //Điều hướng về trang List Product
    }
    else {
      this.ps.createProduct(obj).subscribe();
      this.router.navigate(['/product']);
    }
    
  }

}
