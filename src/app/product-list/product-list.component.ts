import { CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { filter, pipe } from 'rxjs';
import { Product } from '../dto/product.dto';
import { ConvertToSpace } from "../Pipes/convert-to-space.pipe";
import { StarRatingComponent } from "../star-rating/star-rating.component";

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

  get ListFilter():string{
    return this._listFilter;
  }

  set listFilter(filterValue: string){
    this._listFilter = filterValue;
    this.filteredProducts = this.performFilter(filterValue);

  }

  products: Product[] = []
  filteredProducts: Product[] = [];

  toggleImages(){
    this.areImagesVisible = !this.areImagesVisible;
  }

  initialiseProducts(){
    this.products.push(
      new Product(
        1,
        "Leaf Rake",
        "GDN-0011",
        new Date("March 19, 2016"),
        "Leaf rake with 48-inch wooden handle.",
        19.95,
        3.2,
        "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      ),
      new Product(
        2,
        "Garden Cart",
        "GDN-0023",
        new Date("March 18, 2016"),
        "15 gallon capacity rolling garden cart",
        32.99,
        4.2,
        "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      ),
      new Product(
          5,
          "Hammer",
          "TBX-0048",
          new Date("May 21, 2016"),
          "Curved claw steel hammer",
          8.9,
          4.8,
          "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
      ),
      new Product(
        8,
        "Saw",
        "TBX-0022",
        new Date("May 15, 2016"),
        "15-inch steel blade hand saw",
        11.55,
        3.7,
        "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
      ),
      new Product(
        10,
        "Video Game Controller",
        "GMG-0042",
        new Date("October 15, 2015"),
        "Standard two-button video game controller",
        35.95,
        4.6,
        "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"        
      ),
      new Product(
        11,
        "Bonnett u Bumper",
        "Bon-0139",
        new Date("September 13, 2005"),
        "Standard frontend of a car",
        100.25,
        5,
        "https://media.istockphoto.com/id/1145720458/photo/3d-illustration-of-generic-red-car-front-view.jpg?s=612x612&w=0&k=20&c=GeLrH7n-UMTX6l1ULskxQG9_6D_PTlW3m96RMAQzErU="        
      )
    );
  }

  ngOnInit(): void {
    this.initialiseProducts()
    this.filteredProducts = this.products;
  }

  performFilter(filterBy: string):Product[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) => {
      return product.name.toLocaleLowerCase().indexOf(filterBy) != -1;
    })
  }
}
