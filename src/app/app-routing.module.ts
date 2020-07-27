import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'sign_in', component: SignInComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
