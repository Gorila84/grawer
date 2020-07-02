import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { MarkRangeComponent } from './markRange/markRange.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CountEngraveService } from './_services/countEngrave.service';
import { SellingPriceComponent } from './sellingPrice/sellingPrice.component';
import { appRoutes } from './routes';

@NgModule({
   declarations: [
      AppComponent,
      MarkRangeComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent,
      SellingPriceComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      TabsModule.forRoot()
   ],
   providers: [
      AuthService,
      CountEngraveService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
