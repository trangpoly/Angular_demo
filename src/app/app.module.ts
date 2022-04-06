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
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { AsideComponent } from './layout/aside/aside.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductNameComponent } from './components/product-name/product-name.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { ProductStatusComponent } from './components/product-status/product-status.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ClientComponent } from './layouts/client/client.component';

//NgModule định nghĩa module tổng
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductComponent,
    StudentComponent,
    ProductDetailComponent,
    ProductFormComponent,
    LayoutComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    ShowValidateComponent,
    ProductNameComponent,
    ProductStatusComponent,
    AdminComponent,
    ClientComponent
  ],
  imports: [ //import các thành phần cần sử dụng
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, //improt cho các component con sử dụng được
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService], //Định nghĩa các service có thể dùng
  bootstrap: [AppComponent]
})
export class AppModule { }
