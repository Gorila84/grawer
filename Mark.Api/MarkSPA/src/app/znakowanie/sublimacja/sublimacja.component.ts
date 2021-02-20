import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MarkService } from 'src/app/_services/mark.service';
import { ActivatedRoute } from '@angular/router';
import { Engrave } from 'src/app/_model/engrave';
import { CountService } from 'src/app/_services/count.service';

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
  constructor(private http: HttpClient, 
             
              private markSevice: MarkService,
              private route: ActivatedRoute,
              private counting: CountService) { }

  ngOnInit() {
    
  }
  count(){
    this.count$ = this.http.post(this.engraveUrl, this.model);
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

