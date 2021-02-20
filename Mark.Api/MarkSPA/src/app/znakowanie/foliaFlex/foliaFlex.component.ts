import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-foliaFlex',
  templateUrl: './foliaFlex.component.html',
  styleUrls: ['./foliaFlex.component.css']
})
export class FoliaFlexComponent implements OnInit {

  engraveUrl = 'http://localhost:5000/api/FoliaFlex';
  model: any = {};
  count$: any;
  baseUrl = environment.apiUrl;
  message: string = 'expanded';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  count(){
    this.count$ = this.http.post(this.engraveUrl, this.model);

  }
 
 
  // collapsed(): void {
  //   this.message = 'collapsed';
  // }
 
  // collapses(): void {
  //   this.message = 'collapses';
  // }
 
  // expanded(): void {
  //   this.message = 'expanded';
  // }
 
  // expands(): void {
  //   this.message = 'expands';
  // }
}
