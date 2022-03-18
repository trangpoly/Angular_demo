import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
//FormsModule được cung cấp để tuoưng tác với form của angular
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';

//NgModule định nghĩa module tổng
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductComponent,
    StudentComponent
  ],
  imports: [ //import các thành phần cần sử dụng
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule //improt cho các component con sử dụng được
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
