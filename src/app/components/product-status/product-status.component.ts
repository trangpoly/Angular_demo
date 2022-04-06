import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-status',
  templateUrl: './product-status.component.html',
  styleUrls: ['./product-status.component.css']
})
export class ProductStatusComponent implements OnInit {
  @Input() status: number; 
  //output2: định nghĩa sự kiện gửi dữ liệu về cha
  @Output() changeStatus: EventEmitter<number>;
  constructor() {
    this.status = 0;
    this.changeStatus = new EventEmitter();
   }

  ngOnInit(): void {
  }
  //output1: định nghĩa sự kiện ở con
  onChangeStatus(newStatus: number){
    //output3: mang dữ liệu về cho component cha qua emit
    this.changeStatus.emit(newStatus);
  }

}
