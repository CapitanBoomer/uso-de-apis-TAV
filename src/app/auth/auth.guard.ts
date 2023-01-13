import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginServService} from './servicio/login-serv.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private serv:LoginServService){};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.serv.obtenerconfirmacion();
    }


  }


