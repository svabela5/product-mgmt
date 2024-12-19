import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "products", component: ProductListComponent},
    {path: "products/:id", component: ProductDetailComponent},
    {path: "home", component:HomeComponent},
    {path: "**", redirectTo: "/home", pathMatch:"full"}
];
