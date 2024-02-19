import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/model/product.model';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;
  id: number;
  public form = new UntypedFormGroup({
    id: new UntypedFormControl(''),
    price: new UntypedFormControl(''),
    description: new UntypedFormControl(''),
    composition: new UntypedFormControl(''),
    image: new UntypedFormControl(''),
    isActive: new UntypedFormControl(''),
  });

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  onEditProductState(id: number) {
    this.productService.onEditProductState(id).subscribe((data) => {
      this.reloadData();
    });
  }

  private reloadData() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.product$ = this.productService.onDisplayProductById(this.id).pipe(
        map((res) => {
          this.form.controls.id.setValue(+this.id);
          this.form.controls.price.setValue(res.price);
          this.form.controls.image.setValue(res.image);
          this.form.controls.description.setValue(res.description);
          this.form.controls.composition.setValue(res.composition);
          this.form.controls.isActive.setValue(res.isActive);
          return res;
        })
      );
    });
  }

  onEditProduct() {
    if (this.form.valid) {
      this.productService.onEditProduct(this.form.value).subscribe((data) => {
        this.reloadData();
      });
    }
  }
}
