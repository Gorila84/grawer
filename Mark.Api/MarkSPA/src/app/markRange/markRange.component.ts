import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkRangeService } from '../_services/markRange.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-markRange',
  templateUrl: './markRange.component.html',
  styleUrls: ['./markRange.component.css']
})
export class MarkRangeComponent implements OnInit {
  //baseUrl: 'http://localhost:5000/api/';
  markRanges: any;
  model: any ={};
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, 
              private markRange: MarkRangeService) { }

  ngOnInit() {
    this.getMarkRanges();
  }

  getMarkRanges(){
    this.http.get( this.baseUrl + 'range').subscribe(response => {
      this.markRanges = response;
    }, error => {
      console.log(error);
    });
  }

  postMarkRange(){
    this.markRange.addMarkRange(this.model).subscribe();
  }
  

}
