import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcursoPageRoutingModule } from './concurso-routing.module';

import { ConcursoPage } from './concurso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcursoPageRoutingModule
  ],
  declarations: [ConcursoPage]
})
export class ConcursoPageModule {}
