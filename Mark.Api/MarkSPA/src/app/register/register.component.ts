import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any ={};
  registerMode = false;
  
  constructor() { }

  ngOnInit() {
  }
  register(){
    console.log(this.model);
  }
  cancel(){
    console.log('Anulowano');
  }

}
