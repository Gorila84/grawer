import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellingPriceComponent } from './sellingPrice/sellingPrice.component';
import { MarkRangeComponent } from './markRange/markRange.component';
import { GrawerowanieComponent } from './znakowanie/grawerowanie/grawerowanie.component';
import { FoliaFlexComponent } from './znakowanie/foliaFlex/foliaFlex.component';
import { FoliaFlockComponent } from './znakowanie/foliaFlock/foliaFlock.component';
import { TermotransferComponent } from './znakowanie/termotransfer/termotransfer.component';
import { SublimacjaComponent } from './znakowanie/sublimacja/sublimacja.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'grawer', component: GrawerowanieComponent},
    {path: 'sublimacja', component: SublimacjaComponent},
    {path: 'foliaflex', component: FoliaFlexComponent},
    {path: 'flock', component: FoliaFlockComponent},
    {path: 'termotransfer', component: TermotransferComponent},
    {path: 'cenysprzedazy', component: SellingPriceComponent},
    {path: 'zakresy', component: MarkRangeComponent},
    {path: '**', redirectTo: 'home'}
]