import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  countingForm: FormGroup;

  constructor(private http: HttpClient) { }
  

  ngOnInit() {
    this.countingForm = new FormGroup({
      height: new FormControl(Validators.required),
      width: new FormControl(Validators.required),
      quantity: new FormControl(Validators.required)
    });
  }
  count(){
    this.count$ = this.http.post(this.baseUrl + 'Flock', this.model);

  }

}
