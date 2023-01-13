import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Auth} from '../modelos/auth'
import {LoginServService} from './../auth/servicio/login-serv.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public formulario!: FormGroup ;
  constructor(public servicio:LoginServService,private fb: FormBuilder,private ruta:Router)
   {this.formularioInicio(); }

  ngOnInit() {

  }
  public formularioInicio() {
    this.formulario = this.fb.group({
      username:  new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    })
  }
  public probarlog(){
    this.servicio.autenticar({
      username: this.formulario.value.username,
      password:this.formulario.value.password,
    })
    console.log(this.servicio.obtenerToken)
  }

  public validar(){

  }
}
