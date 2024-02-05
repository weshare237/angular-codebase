import { Component, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Array<ProductRepresentation> = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProductsWithLimit();
  }

  getAllProductsWithLimit(): void {
    this.productService.getAllProductsWithLimit().subscribe({
      next: (data: ProductRepresentation[]) => {
        this.products = data;
        console.log(data[0].category);
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
