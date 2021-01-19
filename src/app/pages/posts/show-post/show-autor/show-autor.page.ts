import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ModalController, NavParams } from "@ionic/angular";

@Component({
  selector: 'app-show-autor',
  templateUrl: './show-autor.page.html',
  styleUrls: ['./show-autor.page.scss'],
})
export class ShowAutorPage implements OnInit {

  @Input() author:any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

}
