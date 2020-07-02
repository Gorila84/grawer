import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountEngraveService {

  baseUrl = 'http://localhost:5000/api/Engrave'
constructor(private http: HttpClient) { }

count(model: any){
  return this.http.post(this.baseUrl, model)
  .pipe(map((response: any) => {
    const result = response;
    if(result){
      
            console.log(localStorage.setItem('price', result.price));
    }
}));
}
}

