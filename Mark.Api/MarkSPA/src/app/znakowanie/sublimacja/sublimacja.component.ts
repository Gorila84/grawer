import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MarkService } from 'src/app/_services/mark.service';
import { ActivatedRoute } from '@angular/router';
import { Engrave } from 'src/app/_model/engrave';
import { CountService } from 'src/app/_services/count.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sublimacja',
  templateUrl: './sublimacja.component.html',
  styleUrls: ['./sublimacja.component.css']
})
export class SublimacjaComponent implements OnInit {

  engraveUrl = 'http://localhost:5000/api/Sublimacja';
  model: any = {};
  count$: any;
  baseUrl = environment.apiUrl;
  mark: Engrave;
  countingForm: FormGroup;

  constructor(private http: HttpClient, 
             
              private markSevice: MarkService,
              private route: ActivatedRoute,
              private counting: CountService) { }

  ngOnInit() {
    this.countingForm = new FormGroup({
      height: new FormControl(Validators.required),
      width: new FormControl(Validators.required),
      quantity: new FormControl(Validators.required)
    });
  }
  count(){
    this.count$ = this.http.post(this.baseUrl + "Sublimacja", this.model);
 }
  // count(){
  //   this count$ = this.counting.countMarkPrice(+this.route.snapshot.params['id'],)
  // }
  // loadSublimation(){
  //   this.markSevice.getGetMarkType(this.route.paramMap['name']).
  //   subscribe((mark: Engrave)=>{
  //     this.mark = mark
  //   });
  }


// }

