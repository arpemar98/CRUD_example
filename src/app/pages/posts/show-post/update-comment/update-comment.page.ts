import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ModalController, NavParams } from "@ionic/angular";
import { Comment } from '../../../../classes/comment';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.page.html',
  styleUrls: ['./update-comment.page.scss'],
})
export class UpdateCommentPage implements OnInit {


  @Input() comment: Comment;

  constructor(private modalCtrl:ModalController) { 
    this.comment = new Comment();
  }

  ngOnInit() {
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  updateComment(){
    fetch('https://jsonplaceholder.typicode.com/comments/' + this.comment.postId, {
      method: 'PUT',
      body: JSON.stringify({
        id: this.comment.id,
        name: this.comment.name,
        email: this.comment.email,
        body: this.comment.body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json()).then(
      (json) => {
        console.log(json);
        
        this.modalCtrl.dismiss(this.comment); // RETURN NEW DATA
      }
    );
  }


}
