import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MarkRangeService {

constructor(private http: HttpClient) { }

addMarkRange(model: any){
  return this.http.post('http://localhost:5000/api/sellingmaterialprice', model);
}
}


