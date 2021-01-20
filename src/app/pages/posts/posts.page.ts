import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Post } from '../../classes/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  public posts:Post;
  
  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
    this.load();
  }

  async load(){

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });

    await loading.present();    

    fetch('https://jsonplaceholder.typicode.com/posts').then(
      (response) => response.json()
    ).then(
      (json) => {
        console.log("Getting Posts:..",json);
        this.posts = json;
        loading.dismiss();
      }

    );
  }

}
