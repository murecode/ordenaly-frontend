import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IProduct } from "./IProduct.inteface"; 
import { environment } from "src/environments/environment.dev";
// import { environment } from "src/environments/environment.prod";

@Injectable({providedIn: 'root'})
export class ProductService {

  private baseUrl:string = environment.baseUrl;

  constructor( private http: HttpClient ) {};

  getProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseUrl}/products`);
  }

  getProduct( id:string ):Observable<IProduct|undefined> {
    return this.http.get<IProduct>(`${this.baseUrl}/products/${ id }`);
  }

  newProduct( product:IProduct ):Observable<IProduct> {
    return this.http.post<IProduct>( `${this.baseUrl}/products`, product);
  }

  // updateProduct( product:IProduct ):Observable<IProduct> {
  //   return this.http.put<IProduct>(`${this.baseUrl}/products/${ product.product_id }`, product);
  // }

}