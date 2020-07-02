import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CountEngraveService } from '../_services/countEngrave.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: any={}; 

  result: any;
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient, private countEngrave: CountEngraveService) { }

  ngOnInit() {
  }
  count(){
    this.countEngrave.count(this.model).subscribe();
  }


}
