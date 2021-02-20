import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

countMarkPrice(model: any){
  return this.http.post(this.baseUrl + 'engrave/', model);
   
}

}
