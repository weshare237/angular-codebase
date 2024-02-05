import { Component, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css',
})
export class NewProductComponent implements OnInit {
  // product: ProductRepresentation = {};
  productForm: any;

  ngOnInit(): void {
    this.productForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      price: new FormControl(0, [Validators.required, Validators.min(20)]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      imageUrl: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }

  constructor(private productService: ProductService, private router: Router) {}

  get title() {
    return this.productForm.get('title');
  }

  handleSubmit(): void {
    // this.productService.createProduct(this.product).subscribe({
    //   next: (result: ProductRepresentation) => {
    //     this.router.navigate(['products']);
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     if (error instanceof ErrorEvent) {
    //       console.error(`An error occured: ${error}`);
    //     } else {
    //       // Server side error
    //       console.error(
    //         `Server returned status code ${error.status}, error message: ${error.message}`
    //       );
    //     }
    //   },
    // });

    console.log(this.productForm.value);
  }
}
