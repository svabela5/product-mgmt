import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ProductAddUpdate } from '../dto/product-add-update.dto';
import { Product } from '../dto/product.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  productForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router){

  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      code: null,
      name: null,
      description: null,
      releaseDate: null,
      price: null,
      starRating: null,
      imageUrl: null
    })
  }

  submitForm(){
    console.log(JSON.stringify(this.productForm.value));
    const productToAdd: ProductAddUpdate = this.productForm.value;

    this.productService.addProduct(productToAdd).subscribe((addedProduct: Product)=> {
      console.log(JSON.stringify(addedProduct));
      this.router.navigate(["/products"]);
    })
  }
}
