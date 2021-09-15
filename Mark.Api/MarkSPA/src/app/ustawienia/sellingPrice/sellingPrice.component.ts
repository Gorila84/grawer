import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellingPriceService } from '../../_services/sellingPrice.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { SellingPrice } from 'src/app/_model/sellingPrice';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-sellingPrice',
  templateUrl: './sellingPrice.component.html',
  styleUrls: ['./sellingPrice.component.css']
})
export class SellingPriceComponent implements OnInit {
  @Input() sellingPriceModel: SellingPrice;
  status;
  sellingPrices: any;
  model: any ={};
  closeResult = '';
  name:string;
  content: FormGroup;
  
  
    //editProfileForm: FormGroup;
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient , 
              private sellingPrice: SellingPriceService,
              private modalService: NgbModal,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSellingPrice();
  }

  deleteRow(value){
    
  }

 
  deleteUsers(name: string){
    
    
    this.http.delete(this.baseUrl + "SellingMaterialPrice/" + name).subscribe(
                      () => this.status = 'Delete successful');
    this.sellingPrices.splice(this.model);
    
    console.log(name + " zostal usuniety");
    location.reload();
    
 }



  getSellingPrice(){
    this.http.get(this.baseUrl + "SellingMaterialPrice").subscribe(response => {
      this.sellingPrices = response;
    }, error => {
      console.log(error);
    });
  }

  getSellingPriceByName(name: string){
    this.http.get(this.baseUrl + "SellingMaterialPrice").subscribe(response => {
      this.sellingPrices = response;
    },error => {
      console.log(error);
    });

  }

  // getPrice(name){
  //   this.http.get('http://localhost:5000/api/SellingMaterialPrice').subscribe(response => {
  //     this.sellingPrices = response;
  //   }, 
  // }

  postSellingPrice(){
    this.sellingPrice.addSellingPrice(this.model).subscribe();
    this.sellingPrices.push(this.model);
    location.reload();
  }
  // 
  

}
