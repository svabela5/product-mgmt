import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../dto/product.dto";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    endpoint: string = 'http://localhost:8080/api/product';

    constructor(private httpClient: HttpClient){

    }

    getProducts():Observable<Product[]>{
        return this.httpClient.get<Product[]>(this.endpoint)
    }
}