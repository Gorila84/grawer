import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-grawerowanie',
  templateUrl: './grawerowanie.component.html',
  styleUrls: ['./grawerowanie.component.css']
})
export class GrawerowanieComponent implements OnInit {

  engraveUrl = 'http://localhost:5000/api/Engrave';
  model: any = {};
  countingForm: FormGroup;

  count$: any;
  baseUrl = environment.apiUrl;
  txtValue:string = null;
  message : string;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.countingForm = new FormGroup({
      height: new FormControl(Validators.required),
      width: new FormControl(Validators.required),
      quantity: new FormControl(Validators.required)
    });
  }
  count(){
    this.count$ = this.http.post(this.baseUrl + 'Engrave',this.model);

  }

  onTextChange(value)
  {
    this.txtValue = value;
    if(this.txtValue == '')
    {
      this.message="Textbox is empty !!!";
    }
    
  }

 

}
