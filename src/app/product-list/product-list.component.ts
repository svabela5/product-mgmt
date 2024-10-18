import { CurrencyPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, LowerCasePipe, CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title: string = "Product Management System";
  color: String = "darkred";

  areImagesVisible: Boolean = false;

  imageWidth: number = 50;
  imageMargin: number = 2

  listFilter: string = "";

  products: any[] = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    },
    {
      "productId": 11,
      "productName": "Bonnett u Bumper",
      "productCode": "Bon-0042",
      "releaseDate": "September 13, 2005",
      "description": "Standard frontend of a car",
      "price": 100.00,
      "starRating": 5,
      "imageUrl": "https://media.istockphoto.com/id/1145720458/photo/3d-illustration-of-generic-red-car-front-view.jpg?s=612x612&w=0&k=20&c=GeLrH7n-UMTX6l1ULskxQG9_6D_PTlW3m96RMAQzErU="
  }
];

  toggleImages(){
    this.areImagesVisible = !this.areImagesVisible;
  }
}
