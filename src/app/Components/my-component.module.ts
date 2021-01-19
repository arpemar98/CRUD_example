import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

import { MenuComponent } from './menu/menu.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MyComponentModule {}