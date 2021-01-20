import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Comment } from '../../../classes/comment';
import { Post } from '../../../classes/post';

import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { UpdateCommentPage } from './update-comment/update-comment.page';
import { ShowAutorPage } from './show-autor/show-autor.page';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.page.html',
  styleUrls: ['./show-post.page.scss'],
})
export class ShowPostPage implements OnInit {

  public newComment:Comment;

  public postId:string;
  public postInfo:Post;
  public commentsList:Comment[];
  public user:any;

  constructor(private _activatedRoute:ActivatedRoute,public loadingController: LoadingController, public alertCtrl:AlertController,public modalController: ModalController,public platform: Platform) { 
    this.newComment = new Comment();
    this.postInfo = new Post();
  }

  ngOnInit() {
    this.postId = this._activatedRoute.snapshot.paramMap.get('id');
    this.getPosts();
  }

  async getPosts(){

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });

    await loading.present();    

    fetch('https://jsonplaceholder.typicode.com/posts/' + this.postId).then(
      (response) => response.json()
    ).then(
      (json) => {
        
        console.log("Getting ",json);
        this.postInfo = json;

        fetch('https://jsonplaceholder.typicode.com/posts/' + this.postId + '/comments').then(
          ((response) => response.json())
        ).then(
          (json) => {
            this.commentsList = json;

            fetch('https://jsonplaceholder.typicode.com/users/'+this.postInfo.userId).then(
              ((response) => response.json())
            ).then(
              (json) => {
                this.user = json;
                loading.dismiss();
              }
            );
          }
        )
      }
    );
  }

  async createComment(){

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Create comment',
      message: 'Do you want to comment?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Yes',
          handler: () => {
            this.postComment();
          }
        }
      ]
    });

    await alert.present();
  }

  postComment(){
    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({
        postId: this.postId,
        name: this.newComment.name,
        email: this.newComment.email,
        body: this.newComment.body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(
      (response) => response.json()
    ).then(
      (jsonComment) => {
        
        console.log("Commenting:..",jsonComment);

        this.commentsList.push(jsonComment);

        this.newComment.name ="";
        this.newComment.email ="";
        this.newComment.body ="";
      }
    );
  }

  async updateComment(index:string, id:string, name:string, email:string, body:string){

    let currentComment:Comment = new Comment();

    currentComment.id = id;
    currentComment.postId = this.postId;
    currentComment.name = name;
    currentComment.email = email;
    currentComment.body = body;
    
    const modal = await this.modalController.create({
      component: UpdateCommentPage,
      componentProps: {
        'comment': currentComment
      },
      swipeToClose: true
    });

    modal.onDidDismiss().then(
      (updated) => {

        const newData:Comment = updated.data;

        if(newData){
          console.log("Updated...", newData);

          this.commentsList[index] = newData;
        }
      }
    );

    return await modal.present();
  }

  async deleteCommentAlert(id:string){

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Delete comment',
      message: 'Do you want to delete this comment?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Yes',
          handler: () => {
            this.deleteComment(id);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteComment(idComment:string){
    fetch('https://jsonplaceholder.typicode.com/comments/' + idComment, {
      method: 'DELETE',
    }).then(
      result =>{
        console.log("Deleting:..", result);

        let index = this.commentsList.findIndex(i => i.id == idComment);

        this.commentsList.splice(index, 1);
      }
    );
  }

  async showAutor(){
    const modal = await this.modalController.create({
      component: ShowAutorPage,
      componentProps: {
        'author': this.user
      },
      swipeToClose: true
    });

    return await modal.present();
  }


}
