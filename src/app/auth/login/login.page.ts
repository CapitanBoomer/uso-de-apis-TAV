import { Component, OnInit } from '@angular/core';
import {LoginServService} from './../servicio/login-serv.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public prueba:LoginServService) { }

  ngOnInit() {
  }
public onClick(){
  this.prueba.autenticar
}
}
