import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PagesPageRoutingModule } from './pages-routing.module';

import { PagesPage } from './pages.page';
import { MyComponentModule } from '../Components/my-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesPageRoutingModule,
    MyComponentModule,
    RouterModule
  ],
  declarations: [PagesPage]
})
export class PagesPageModule {}
