import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-creator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.css'],
  
  
})


export class PostCreatorComponent {

  isTwisTweetDisabled: boolean = true;
  showPublicAdvice: boolean = false;
  tweetMessage: string = '';

  onInputChange () {
    this.isTwisTweetDisabled = this.tweetMessage.trim() === "";
  }

tweet() {
    let user = {
      name: 'User',
      at: 'user_user_123'
    }; // A informação provavelmente seria proveniente de uma variavel da sessão "getCurrentUser()"

    let post = {
      user: user,
      text: this.tweetMessage,
      dateTime: new Date()
    };
  
    this.publishTweet(post)
    


    
    console.log(post);

    this.tweetMessage = "";
  }

  publishTweet (post : any) {
    let posts = this.getTweets();
    posts.push(post);
    
    localStorage.setItem("tweets", JSON.stringify(posts));
  }

  getTweets () {
    let posts = [];
    let postsCurrentStorage = localStorage.getItem("tweets");
    if (postsCurrentStorage !== null) {
      posts = JSON.parse(postsCurrentStorage);
    }

    return posts;
  }
  
}
