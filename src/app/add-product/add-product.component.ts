import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ProductAddUpdate } from '../dto/product-add-update.dto';
import { Product } from '../dto/product.dto';
import { Router } from '@angular/router';
import { productCodeValidator } from '../validators/product-code.validator';

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
      code: ['', [Validators.required, productCodeValidator()]],
      name: ['', Validators.required],
      description: ['', Validators.required],
      releaseDate: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0.01)]],
      starRating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      imageUrl: ['', Validators.required]
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

  shouldProcessControlValidationMessages(controlName: string){
    let control = this.productForm.get(controlName)
    return ((control!.touched || control!.dirty) && control!.errors);
  }
}
