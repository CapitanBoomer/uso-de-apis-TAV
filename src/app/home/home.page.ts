import { Component } from '@angular/core';
import {LoginServService} from './../auth/servicio/login-serv.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public prueba:LoginServService) { }

  ngOnInit() {
    console.log(this.prueba.obtenerToken)
  }

  public probarlog(){
    this.prueba.autenticar({
      username:'kminchelle',
      password:'0lelplR',
    })
    console.log(this.prueba.obtenerToken)
  }
}
