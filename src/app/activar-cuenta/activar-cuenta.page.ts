import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginServService } from '../auth/servicio/login-serv.service';
@Component({
  selector: 'app-activar-cuenta',
  templateUrl: './activar-cuenta.page.html',
  styleUrls: ['./activar-cuenta.page.scss'],
})
export class ActivarCuentaPage implements OnInit {
  public nombreusuario: string = '';
  public prnombre: string = '';
  public apellido: string = '';
  public email: string = '';
  public gen: string = '';
  public foto: string = '';
  constructor(public rutaactiva: ActivatedRoute, public serv: LoginServService) { }

  ngOnInit() {
  }
  public ionViewWillEnter() {
    this.rutaactiva.queryParams.subscribe(resp => {
      this.nombreusuario = resp['nombre'] || 'sin nombre',
      this.prnombre = resp['prnombre'] || 'sin nombre',
        this.apellido = resp['apellido'] || 'sin apellido',
        this.email = resp['email'] || 'sin email',
        this.gen = resp['gen'] || 'sin genero',
        this.foto = resp['foto'] || 'sin foto'
    })
  }
}
