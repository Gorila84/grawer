import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SellingPrice } from 'src/app/_model/sellingPrice';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { SellingPriceService } from 'src/app/_services/sellingPrice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cenyZnakowaniaEdycja',
  templateUrl: './cenyZnakowaniaEdycja.component.html',
  styleUrls: ['./cenyZnakowaniaEdycja.component.scss']
})
export class CenyZnakowaniaEdycjaComponent implements OnInit {
  sellingPrice: SellingPrice;
  editForm: NgForm;

  constructor(private http: HttpClient,
              private alertifyService: AlertifyService,
              private sellingPriceService: SellingPriceService,
              private route: ActivatedRoute) { }

  // baseUrl = environment.apiUrl;
  // sellingPrices: any;
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe(data => {
      this.sellingPrice = data.sellingPrice;
    });

  }

updateSellingPrice(){
  this.sellingPriceService.updateSellingPriceBy(this.route.snapshot.params.id, this.sellingPrice)
                          .subscribe(next => {
                            this.alertifyService.success('Twoje dane zostały pomyślnie zaktualizowane.');
                            
                          }, error => {
                            this.alertifyService.error(error);
                      })
}

  // getSellingPrice(){
  //   this.http.get(this.baseUrl + "SellingMaterialPrice" + this.sellingPrice.id).subscribe(response => {
  //     this.sellingPrices = response;
  //   }, error => {
  //     this.alertifyService.error("Brak połączenia z bazą");
  //   });
  // }

  // getSellingPrices(){
  //   this.http.get(this.baseUrl + "SellingMaterialPrice").subscribe(response => {
  //     this.sellingPrices = response;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
