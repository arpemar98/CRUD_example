import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowAutorPage } from './show-autor.page';

const routes: Routes = [
  {
    path: '',
    component: ShowAutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowAutorPageRoutingModule {}
