import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductosService} from './productos.service'
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  nombre:string =''
  constructor(private servicio: ProductosService,private ruta:ActivatedRoute) { }
  ngOnInit() {
  }
public ionViewWillEnter(){
this.ruta.queryParams.subscribe(resp => {this.nombre = resp['nombre']||'nada'})
console.log(this.nombre)
}


}
