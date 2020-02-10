import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcursoPage } from './concurso.page';

const routes: Routes = [
  {
    path: '',
    component: ConcursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcursoPageRoutingModule {}
