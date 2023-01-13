import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public nombreusuario: string = '';
  public prnombre: string = '';
  public apellido: string = '';
  public email: string = '';
  public genero: string = '';
  public foto: string = '';
  constructor(public rutaactiva:ActivatedRoute ) { }

  ngOnInit() {
  }
  public ionViewWillEnter() {
    this.rutaactiva.queryParams.subscribe(resp => {
      this.nombreusuario = resp['nombre'] || 'sin nombre',
      this.prnombre = resp['prnombre'] || 'sin nombre',
        this.apellido = resp['apellido'] || 'sin apellido',
        this.email = resp['email'] || 'sin email',
        this.genero = resp['gen'] || 'sin genero',
        this.foto = resp['foto'] || 'sin foto'
    })
  }
}
