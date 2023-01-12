import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Auth, authresponse } from '../../modelos/auth';
import { AlertController } from '@ionic/angular';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginServService {

  private url_auth: string = 'https://dummyjson.com/auth/login';
  private datosuser: authresponse | null | Observable<null> = null ;
  private cargando: boolean = false;
  constructor(private clien: HttpClient, private alerta:AlertController) { }


  public obtenerToken() {
   return this.datosuser;
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
        'Content-Type': 'application/json' //firefox dev o w3s, para encontarr documentacion de headers http

      }

    })
    .pipe(catchError(async(error:HttpErrorResponse)=>{
      if(error.status=== 400){
        const alerta = await this.alerta.create({header:'error 404'});
        await alerta.present();
      }
      return null}))
    .subscribe(async(datos) => {

      this.datosuser = datos;
      this.cargando = false;
  if(datos){const alerta = await this.alerta.create({header:'correrto'});
await alerta.present();}
//aqui va la redireccion
    })
  }; // manera de solicitar unos atributos en concreto llaamandolos desde la interface (auth.ts)

}
