import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductoService} from './servicio/producto.service'
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  public nombre: string ='';
  constructor(private servicio: ProductoService,private ruta:ActivatedRoute) { }

  ngOnInit() {
  }
public ionViewWillEnter(){
  this.ruta.queryParams.subscribe(res => {this.nombre = res['nombre']||'sin nombre'})
}

}
