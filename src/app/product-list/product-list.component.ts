import { CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { filter, pipe } from 'rxjs';
import { Product } from '../dto/product.dto';
import { ConvertToSpace } from "../Pipes/convert-to-space.pipe";
import { StarRatingComponent } from "../star-rating/star-rating.component";
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, LowerCasePipe, CurrencyPipe, DatePipe, ConvertToSpace, StarRatingComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  title: string = "Product Management System";
  color: String = "darkred";

  areImagesVisible: Boolean = false;

  imageWidth: number = 50;
  imageMargin: number = 2

  private _listFilter: string = "";

  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(filterValue: string){
    this._listFilter = filterValue;

    this.productService.searchProductsByName(filterValue).subscribe((response: Product[]) => {
      this.products = response;
    });

  }

  products: Product[] = []

  constructor(private productService: ProductService){}

  toggleImages(){
    this.areImagesVisible = !this.areImagesVisible;
  }

  initialiseProducts(){
    this.productService.getProducts().subscribe((response: Product[])=>{
      this.products = response
    })
  }

  ngOnInit(): void {
    this.initialiseProducts()
  }

  onNotify(message: string){
    console.log(message);
  }
}
