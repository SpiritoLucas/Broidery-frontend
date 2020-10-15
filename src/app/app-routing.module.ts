import { ProductComponent } from './products/product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'sign_in', component: SignInComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'catalogue', component: CatalogueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
