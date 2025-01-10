import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../dto/product.dto';
import { ProductService } from '../services/product.service';
import { CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { ConvertToSpace } from "../Pipes/convert-to-space.pipe";
import { StarRatingComponent } from "../star-rating/star-rating.component";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, CurrencyPipe, DatePipe, ConvertToSpace, StarRatingComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  @Input()
  id!: number;
  product!: Product;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    console.log(this.id);
    this.productService.getProductById(this.id).subscribe((response: Product) => {
      this.product = response;
    })
  }
}
