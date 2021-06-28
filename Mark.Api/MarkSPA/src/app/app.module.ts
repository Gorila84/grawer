import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MarkRangeComponent } from './markRange/markRange.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SellingPriceComponent } from './sellingPrice/sellingPrice.component';
import { appRoutes } from './routes';
import { FoliaFlockComponent } from './znakowanie/foliaFlock/foliaFlock.component';
import { FoliaFlexComponent } from './znakowanie/foliaFlex/foliaFlex.component';
import { GrawerowanieComponent } from './znakowanie/grawerowanie/grawerowanie.component';
import { SublimacjaComponent } from './znakowanie/sublimacja/sublimacja.component';
import { TermotransferComponent } from './znakowanie/termotransfer/termotransfer.component';
import { MarkService } from './_services/mark.service';
import { MarkNameResolver } from './_resolvers/markNameResolver';
import { AlertifyService } from './_services/alertify.service';



@NgModule({
   declarations: [
      AppComponent,
      MarkRangeComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent,
      SellingPriceComponent,
      FoliaFlexComponent,
      FoliaFlockComponent,
      GrawerowanieComponent,
      SublimacjaComponent,
      TermotransferComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
      TabsModule.forRoot(),
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      NgbModule
   ],
   providers: [
      AuthService,
      MarkService,
      MarkNameResolver,
      AlertifyService
      
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
