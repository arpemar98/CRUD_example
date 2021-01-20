import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  currentPopover:any = null;

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {}

  async showCredits() {

    const alert = await this.alertCtrl.create({
      header: 'Made by:',
      subHeader: 'Josue Aristeo Perez Martinez',
      message: 'ArPeMar98@hotmail.com',
      buttons: ['OK']
    });

    await alert.present();
  }

  
}
