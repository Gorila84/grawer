import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellingPriceService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.apiUrl;
  addSellingPrice(model: any){
    return this.http.post(this.baseUrl + 'sellingmaterialprice', model);
    
  }

}
