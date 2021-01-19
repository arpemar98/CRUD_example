import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCommentPageRoutingModule } from './update-comment-routing.module';

import { UpdateCommentPage } from './update-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCommentPageRoutingModule
  ],
  declarations: [UpdateCommentPage]
})
export class UpdateCommentPageModule {}
