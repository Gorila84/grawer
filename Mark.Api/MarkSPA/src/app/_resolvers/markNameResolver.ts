import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Engrave } from '../_model/engrave';
import { MarkService } from '../_services/mark.service';


@Injectable()
export class MarkNameResolver implements Resolve<Engrave>{

    constructor(private markService: MarkService, 
                private router: Router, 
                ){}

    resolve(route: ActivatedRouteSnapshot): Observable<Engrave> {
        return this.markService.getGetMarkType(route.params.markName)
                        
    }
}

