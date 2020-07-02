import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
 

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
   this.authService.login(this.model).subscribe(next=>{
     console.log('Zalogowałeśsię do aplikacji');
   },error => {
     console.log('Wystąpił błąd logowania');
   }
   );
  }
  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
    console.log('Zostałeś wylogowany');
    this.router.navigate(['/home']);
  }
}
