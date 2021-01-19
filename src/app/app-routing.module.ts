import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    /* SOLO USUARIOS NO LOGEADOS */
  { path: '',redirectTo: 'home',pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
