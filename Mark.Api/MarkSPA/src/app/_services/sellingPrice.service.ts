import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellingPriceService {

  constructor(private http: HttpClient) { }

  addSellingPrice(model: any){
    return this.http.post('http://localhost:5000/api/sellingmaterialprice', model);
    
  }

}
