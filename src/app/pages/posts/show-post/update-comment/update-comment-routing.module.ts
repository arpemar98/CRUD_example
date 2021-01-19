import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCommentPage } from './update-comment.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCommentPageRoutingModule {}
