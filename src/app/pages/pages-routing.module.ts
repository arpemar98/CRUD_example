import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    children:[
      {path: '', redirectTo: 'posts', pathMatch: 'full'},
      
      {path: 'posts', loadChildren: () => import('./posts/posts.module').then( m => m.PostsPageModule)},
      {path: 'posts/:id', loadChildren: () => import('./posts/show-post/show-post.module').then( m => m.ShowPostPageModule)},      
      
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
