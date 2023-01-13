import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivarCuentaPageRoutingModule } from './activar-cuenta-routing.module';

import { ActivarCuentaPage } from './activar-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivarCuentaPageRoutingModule
  ],
  declarations: [ActivarCuentaPage]
})
export class ActivarCuentaPageModule {}
