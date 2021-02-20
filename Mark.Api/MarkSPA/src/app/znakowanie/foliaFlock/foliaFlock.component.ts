import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-foliaFlock',
  templateUrl: './foliaFlock.component.html',
  styleUrls: ['./foliaFlock.component.css']
})
export class FoliaFlockComponent implements OnInit {

  engraveUrl = 'http://localhost:5000/api/Flock';
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

}
