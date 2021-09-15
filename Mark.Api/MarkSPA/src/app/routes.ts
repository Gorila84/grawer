import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellingPriceComponent } from './ustawienia/sellingPrice/sellingPrice.component';
import { MarkRangeComponent } from './ustawienia/markRange/markRange.component';
import { GrawerowanieComponent } from './znakowanie/grawerowanie/grawerowanie.component';
import { FoliaFlexComponent } from './znakowanie/foliaFlex/foliaFlex.component';
import { FoliaFlockComponent } from './znakowanie/foliaFlock/foliaFlock.component';
import { TermotransferComponent } from './znakowanie/termotransfer/termotransfer.component';
import { SublimacjaComponent } from './znakowanie/sublimacja/sublimacja.component';
import { CenyZnakowaniaEdycjaComponent } from './ustawienia/cenyZnakowaniaEdycja/cenyZnakowaniaEdycja.component';
import {SellingDetailResolver} from './_resolvers/sellingPrice.resolver';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'grawer', component: GrawerowanieComponent},
    {path: 'sublimacja', component: SublimacjaComponent},
    {path: 'foliaflex', component: FoliaFlexComponent},
    {path: 'flock', component: FoliaFlockComponent},
    {path: 'termotransfer', component: TermotransferComponent},
    {path: 'cenysprzedazy', component: SellingPriceComponent},
    {path: 'cenysprzedazy/:id', component: CenyZnakowaniaEdycjaComponent, resolve:{sellingPrice: SellingDetailResolver}},
    {path: 'zakresy', component: MarkRangeComponent},
    {path: '**', redirectTo: 'home'}
    
]