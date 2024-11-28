import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../dto/product.dto";
import { ProductAddUpdate } from "../dto/product-add-update.dto";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    endpoint: string = 'http://localhost:8080/api/product';

    httpHeader = {
        headers: new HttpHeaders({
            "Content-Type": "application-json"
        })
    }

    constructor(private httpClient: HttpClient){

    }

    getProducts():Observable<Product[]>{
        return this.httpClient.get<Product[]>(this.endpoint);
    }

    searchProductsByName(query: string):Observable<Product[]>{
        return this.httpClient.get<Product[]>(this.endpoint + "?name=" + query);
    }

    addProduct(product: ProductAddUpdate):Observable<Product>{
        return this.httpClient.post<Product>(this.endpoint, product, this.httpHeader)
    }

    updateProduct(productToUpdate: ProductAddUpdate, id: number){
        return this.httpClient.put<Product>(this.endpoint + "/" + id, productToUpdate, this.httpHeader)
    }
    deleteProduct(id: number):Observable<any>{
        return this.httpClient.delete(this.endpoint + "/" + id);
    }
}