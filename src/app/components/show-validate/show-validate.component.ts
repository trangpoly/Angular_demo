import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface ERROR {
  hasName: string,
    required: string,
    minlength:string,
    [key:string]: string
};

@Component({
  selector: 'app-show-validate',
  templateUrl: './show-validate.component.html',
  styleUrls: ['./show-validate.component.css']
})
export class ShowValidateComponent implements OnInit {
  //C1: tên biến cũ được truyền sang
  // @Input() form: any;
  //C2: đổi tên biến mới
  @Input('formField') formData: any;
  @Input() key: string;

  constructor() {
    this.key = '';
  }
  
  ngOnInit(): void {
    console.log(this.key);
  }

}
