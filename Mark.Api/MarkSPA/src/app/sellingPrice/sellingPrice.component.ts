import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellingPriceService } from '../_services/sellingPrice.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sellingPrice',
  templateUrl: './sellingPrice.component.html',
  styleUrls: ['./sellingPrice.component.css']
})
export class SellingPriceComponent implements OnInit {

  sellingPrices: any;
  model: any ={};
  closeResult = '';
  name:string;

  constructor(private http: HttpClient , 
              private sellingPrice: SellingPriceService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getSellingPrice();
  }

  getSellingPrice(){
    this.http.get('http://localhost:5000/api/SellingMaterialPrice').subscribe(response => {
      this.sellingPrices = response;
    }, error => {
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
