import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellingPriceComponent } from './sellingPrice/sellingPrice.component';
import { MarkRangeComponent } from './markRange/markRange.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'cenysprzedazy', component: SellingPriceComponent},
    {path: 'zakresy', component: MarkRangeComponent},
    {path: '**', redirectTo: 'home'}
]