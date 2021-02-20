import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  engraveUrl = 'http://localhost:5000/api/Engrave';
  model: any={}; 
  count$: any;
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  count(){
    this.count$ = this.http.post(this.engraveUrl, this.model);
    
  }


}
