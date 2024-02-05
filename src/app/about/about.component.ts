import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  username: any;
  queryParam: any;
  products: Array<ProductRepresentation> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // this.username = this.activatedRoute.snapshot.params['username'];
    // this.queryParam = this.activatedRoute.snapshot.queryParams['course'];
    // this.productService.getAllProductsWithLimit().subscribe({
    //   next: (data: ProductRepresentation[]) => {
    //     console.log(data);
    //   },
    // });

    const product: ProductRepresentation = {
      title: 'My Product',
      category: 'Car',
      description: 'BMW',
      price: 500,
      image: 'test.jpg',
    };

    this.productService.createProduct(product).subscribe({
      next: (result: ProductRepresentation) => {
        console.log(result);
      },
      error: (error: HttpErrorResponse) => {
        if (error instanceof ErrorEvent) {
          console.error(`An error occured: ${error}`);
        } else {
          // Server side error
          console.error(
            `Server returned status code ${error.status}, error message: ${error.message}`
          );
        }
      },
    });
  }
}
