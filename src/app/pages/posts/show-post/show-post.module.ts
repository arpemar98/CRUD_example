import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowPostPageRoutingModule } from './show-post-routing.module';

import { ShowPostPage } from './show-post.page';

import { UpdateCommentPageModule } from './update-comment/update-comment.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPostPageRoutingModule,
    RouterModule,
    UpdateCommentPageModule
  ],
  declarations: [ShowPostPage],
  exports: [ShowPostPage]
})
export class ShowPostPageModule {}
