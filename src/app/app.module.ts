import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthComponent } from './auth/auth.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    ProductsComponent,
    AboutUsComponent,
    SignInComponent,
    AuthComponent,
    CatalogueComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
