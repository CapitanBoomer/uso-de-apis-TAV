import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Auth, authresponse } from '../../modelos/auth';
import { AlertController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginServService {
  private url_auth: string = 'https://dummyjson.com/auth/login';
  public datosuser: authresponse | null | Observable<null> = null;
  private cargando: boolean = false;
  public confirmacion: boolean = false;
  constructor(private clien: HttpClient, private alerta: AlertController, private ruta: Router) { }

  public confirmar() {
    this.confirmacion = true
  }

  public obtenerconfirmacion() {
    return this.confirmacion
  }





  public obtenerToken() {
    return (this.datosuser as authresponse).token;
  }


  public obtenercargando() {
    return this.cargando;
  }



  public autenticar({ username, password }: Auth) {
    this.cargando = true;
    this.clien.post<authresponse>(this.url_auth, {
      username
      ,
      password
    }, {
      headers: {
        'Content-Type': 'application/json', //firefox dev o w3s, para encontarr documentacion de headers http

      }

    })
      .pipe(catchError(async (error: HttpErrorResponse) => {
        if (error.status === 400) {
          const alerta = await this.alerta.create({ header: 'error 400' });
          await alerta.present();
        }
        return null
      }))
      .subscribe(async (datos) => {

        this.datosuser = datos;
        this.cargando = false;
        if (datos) { this.ruta.navigate(['/activar'], { queryParams: { nombre: this.datosuser?.username, prnombre: this.datosuser?.firstName, apellido: this.datosuser?.lastName, email: this.datosuser?.email, gen: this.datosuser?.gender, foto: this.datosuser?.image } }) }
        //aqui va la redireccion
      })
  }; // manera de solicitar unos atributos en concreto llaamandolos desde la interface (auth.ts)

}
