import { CanMatchFn, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { inject } from '@angular/core';
import { AuthorisationService } from './services/authorisation.service';
import { AddProductComponent } from './add-product/add-product.component';

const productDetailsCanMatch: CanMatchFn = (route, segments) => {
    const authorisationService = inject(AuthorisationService);
    return authorisationService.canAccessProductDetails(segments[1].path);
}

export const routes: Routes = [
    {path: "add", component: AddProductComponent},
    {path: "products", component: ProductListComponent},
    {path: "products/:id", component: ProductDetailComponent, canMatch: [productDetailsCanMatch]},
    {path: "home", component:HomeComponent},
    {path: "**", redirectTo: "/home", pathMatch:"full"}
];
