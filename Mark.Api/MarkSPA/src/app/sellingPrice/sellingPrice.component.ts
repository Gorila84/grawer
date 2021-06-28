import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellingPriceService } from '../_services/sellingPrice.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { Engrave } from '../_model/engrave';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-sellingPrice',
  templateUrl: './sellingPrice.component.html',
  styleUrls: ['./sellingPrice.component.css']
})
export class SellingPriceComponent implements OnInit {
  status;
  sellingPrices: any;
  model: any ={};
  closeResult = '';
  name:string;
  
  
    //editProfileForm: FormGroup;
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient , 
              private sellingPrice: SellingPriceService,
              private modalService: NgbModal) { }

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
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
