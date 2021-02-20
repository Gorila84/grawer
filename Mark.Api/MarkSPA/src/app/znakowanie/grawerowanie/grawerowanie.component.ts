import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-grawerowanie',
  templateUrl: './grawerowanie.component.html',
  styleUrls: ['./grawerowanie.component.css']
})
export class GrawerowanieComponent implements OnInit {

  engraveUrl = 'http://localhost:5000/api/Engrave';
  model: any = {};
  
  count$: any;
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  count(){
    this.count$ = this.http.post(this.engraveUrl,this.model);

  }


}
