import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServService } from '../auth/servicio/login-serv.service';
import {Productos} from '../modelos/productos'
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public datosprod:Productos| null | Observable<null> = null;
  public url_catalogo:string = 'https://dummyjson.com/products';
  private token : string ='';
  bolsa: Array <Productos> =[]
  private cargando: boolean = false;
    constructor(private clien:HttpClient, private ruta:Router , private auther: LoginServService) { }

  public traertoken(){
    this.token = this.auther.obtenerToken()
    return this.auther.obtenerToken()
  }

  public autenticartoken() {
    this.cargando = true;
    this.clien.get<Productos>(this.url_catalogo, {
      headers: {
        'Content-Type': 'application/json', //firefox dev o w3s, para encontarr documentacion de headers http
        'Authorization': 'Bearer '+ this.token
      }})
    .subscribe(async (datos) => {
      this.datosprod = datos;
      this.cargando = false;
      if (datos) { this.ruta.navigate(['/catalogo'], { queryParams: {nombre: this.datosprod.title} }) }

    })
  };
}
