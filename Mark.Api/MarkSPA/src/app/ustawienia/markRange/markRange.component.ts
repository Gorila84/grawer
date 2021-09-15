import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkRangeService } from '../../_services/markRange.service';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-markRange',
  templateUrl: './markRange.component.html',
  styleUrls: ['./markRange.component.css']
})
export class MarkRangeComponent implements OnInit {
  //baseUrl: 'http://localhost:5000/api/';
  status;
  markRanges: any;
  model: any ={};
  baseUrl = environment.apiUrl;
  rangeForm: FormGroup;
  addRangeForm: FormControl;

  constructor(private http: HttpClient, 
              private markRange: MarkRangeService) { }

  ngOnInit() {
    this.getMarkRanges();
    this.rangeForm = new FormGroup({
      lowerRange: new FormControl(Validators.required),
      higherRange: new FormControl(Validators.required),
      multiplier: new FormControl(Validators.required)
  });
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
  
  deleteMarkRange(id: number){
    
    
    this.http.delete(this.baseUrl + "Range/" + id).subscribe(
                      () => this.status = 'Delete successful');
    this.markRanges.splice(this.model);
    
    console.log(name + " zostal usuniety");
    location.reload();
    
 }

}
