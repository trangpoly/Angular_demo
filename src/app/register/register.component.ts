import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() { 
    this.registerForm = new FormGroup({
      //tên_trường: giá trị là thể hiển của formcontrol(gt_mặc định)
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
          this.checkUsername
        ] 
      ),
      password: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]  
      ),
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.email
        ]
      ),
      name: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      )
    })
  }

  ngOnInit(): void {
  }

  checkUsername(control: AbstractControl): ValidationErrors | null {
    const username = control.value;
    if(!username.includes('trang')){
      return {hasName: true} //obj này được trả về trong error
    }
    return null;
  }
}
