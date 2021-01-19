import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPostPage } from './show-post.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPostPage
  },
  {
    path: 'show-autor',
    loadChildren: () => import('./show-autor/show-autor.module').then( m => m.ShowAutorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPostPageRoutingModule {}
