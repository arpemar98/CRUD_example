import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowAutorPageRoutingModule } from './show-autor-routing.module';

import { ShowAutorPage } from './show-autor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowAutorPageRoutingModule
  ],
  declarations: [ShowAutorPage]
})
export class ShowAutorPageModule {}
