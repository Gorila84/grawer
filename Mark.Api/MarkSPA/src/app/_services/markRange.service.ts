import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarkRangeService {
 baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

addMarkRange(model: any){
  return this.http.post(this.baseUrl + 'range', model);
  
}
}
