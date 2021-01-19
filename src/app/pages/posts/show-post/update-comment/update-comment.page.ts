import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ModalController,AlertController} from "@ionic/angular";

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.page.html',
  styleUrls: ['./update-comment.page.scss'],
})
export class UpdateCommentPage implements OnInit {

  @Input() postId: string;
  @Input() id: string;
  @Input() name: string;
  @Input() email: string;
  @Input() body: string;


  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  updateComment(){
    fetch('https://jsonplaceholder.typicode.com/comments/' + this.postId, {
      method: 'PUT',
      body: JSON.stringify({
        id: this.id,
        name: this.name,
        email: this.email,
        body: this.body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json()).then(
      (json) => {
        console.log(json);
        this.closeModal(); 
      }
    );
  }


}
