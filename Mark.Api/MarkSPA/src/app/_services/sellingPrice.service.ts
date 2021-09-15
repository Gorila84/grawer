import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SellingPrice } from '../_model/sellingPrice';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SellingPriceService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.apiUrl;
  addSellingPrice(model: any){
    return this.http.post(this.baseUrl + 'sellingmaterialprice', model);
    
  }

  SellingPriceById(id: number): Observable<SellingPrice>{
    return this.http.get<SellingPrice>(this.baseUrl + 'SellingMaterialPrice/' + id);
  }

  updateSellingPriceBy(id: number, sellingPrice: SellingPrice){
    
    return this.http.put(this.baseUrl + 'SellingMaterialPrice/' + id, sellingPrice);
  }

}
