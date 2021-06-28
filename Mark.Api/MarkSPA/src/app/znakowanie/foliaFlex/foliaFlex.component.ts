import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-foliaFlex',
  templateUrl: './foliaFlex.component.html',
  styleUrls: ['./foliaFlex.component.css']
})
export class FoliaFlexComponent implements OnInit {

  engraveUrl = 'https://localhost:44381/api/FoliaFlex';
  model: any = {};
  count$: any;
  baseUrl = environment.apiUrl;
  message: string = 'expanded';
  quantityForm: FormControl;
  Quantity: any="1";
  countingForm: FormGroup;

  constructor(private http: HttpClient) { }

  tests = [{id: 1, text: "1" },{id:2, text: "2"},{id:3, text: "3"},{id: 4, text: "4"}];
  private options: string[] = ["10", "20", "50"];
  ngOnInit() {
    this.countingForm = new FormGroup({
      height: new FormControl(Validators.required),
      width: new FormControl(Validators.required),
      quantity: new FormControl(Validators.required)
    });
  }
  count(){
    this.count$ = this.http.post(this.baseUrl + 'FoliaFlex', this.model);
     
  }

  testValue(form: NgForm): void{
    console.log(form.value);
  }
  // get selectedCountry(){
  //   let countryId = this.quantityForm.
  //   let selected = this.quantityForm.;
  //   return selected;
  // }
 
   
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
