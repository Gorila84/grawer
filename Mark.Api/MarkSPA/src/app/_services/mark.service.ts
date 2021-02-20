import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Engrave } from '../_model/engrave';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { NumberFormatStyle } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class MarkService {

  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getMarkTypes() : Observable<Engrave[]>{
  return this.http.get<Engrave[]>(this.baseUrl + 'sellingmaterialprice');
}

getGetMarkType(markName: string): Observable<Engrave>{
  return this.http.get<Engrave>(this.baseUrl +'sellingmaterialprice/' + markName);
}

}
