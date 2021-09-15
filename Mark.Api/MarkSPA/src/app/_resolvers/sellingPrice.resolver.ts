import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {AlertifyService} from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SellingPriceService } from '../_services/sellingPrice.service';
import { SellingPrice } from '../_model/sellingPrice';


@Injectable()
export class SellingDetailResolver implements Resolve<SellingPrice>{

    constructor(private sellingPrice: SellingPriceService, 
                private router: Router, 
                private alertify: AlertifyService){}

                
        resolve(route: ActivatedRouteSnapshot): Observable<SellingPrice> {
            return this.sellingPrice.SellingPriceById(route.params.id).pipe(
                catchError(error => {
                    this.alertify.error('Problem z pobraniem danych');
                    this.router.navigate(['/uzytkownicy']);
                    return of(null)
                }
                
        )
        )
    }
}

