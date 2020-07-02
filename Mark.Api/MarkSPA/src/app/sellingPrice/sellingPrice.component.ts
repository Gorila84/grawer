import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellingPriceService } from '../_services/sellingPrice.service';

@Component({
  selector: 'app-sellingPrice',
  templateUrl: './sellingPrice.component.html',
  styleUrls: ['./sellingPrice.component.css']
})
export class SellingPriceComponent implements OnInit {

  sellingPrices: any;
  model: any ={};

  constructor(private http: HttpClient , private sellingPrice: SellingPriceService) { }

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
  postSellingPrice(){
    this.sellingPrice.addSellingPrice(this.model).subscribe();

  }
  

}
