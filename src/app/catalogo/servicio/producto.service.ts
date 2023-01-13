import { Injectable } from '@angular/core';
import {LoginServService} from './../../auth/servicio/login-serv.service'
import {Productos,productosresponse} from '../../modelos/productos';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
public datosprod:Productos| null | Observable<null> = null;
public url_catalogo:string = 'https://dummyjson.com/products';
private token : string ='';
private cargando: boolean = false;
  constructor(private clien:HttpClient, private ruta:Router,private alerta:AlertController, private auther: LoginServService) { }

public traertoken(){
  this.token = this.auther.obtenerToken()
  return this.auther.obtenerToken()
}

public autenticartoken() {
  this.cargando = true;
  this.clien.get<Productos>(this.url_catalogo, {
    headers: {
      'Content-Type': 'application/json', //firefox dev o w3s, para encontarr documentacion de headers http
      'Authorization': 'Bearer'+ this.token
    }})
  .subscribe(async (datos) => {
    this.datosprod = datos;
    this.cargando = false;
    if (datos) { this.ruta.navigate(['/catalogo'], { queryParams: {nombre: this.datosprod.title} }) }

  })
};
}
