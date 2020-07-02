import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkRangeService } from '../_services/markRange.service';

@Component({
  selector: 'app-markRange',
  templateUrl: './markRange.component.html',
  styleUrls: ['./markRange.component.css']
})
export class MarkRangeComponent implements OnInit {

  markRanges: any;
  model: any ={};

  constructor(private http: HttpClient, private markRange: MarkRangeService) { }

  ngOnInit() {
    this.getMarkRanges();
  }

  getMarkRanges(){
    this.http.get('http://localhost:5000/api/range').subscribe(response => {
      this.markRanges = response;
    }, error => {
      console.log(error);
    });
  }
  

}
