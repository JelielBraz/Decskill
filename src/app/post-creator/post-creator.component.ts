import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';


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
  @Input()
  app: AppComponent = new AppComponent;

  isTwisTweetDisabled: boolean = true;
  showPublicAdvice: boolean = false;
  tweetMessage: string = '';

  onInputChange () {
    this.isTwisTweetDisabled = this.tweetMessage.trim() === "";
  }

  tweet() {
    let user = {
      name: 'User',
      at: '@user_user_123'
    }; // A informação provavelmente seria proveniente de uma variavel da sessão "getCurrentUser()"

    let post = {
      user: user,
      text: this.tweetMessage,
      dateTime: new Date(),
      picturePath: 'man-avatar.png'
    };
  
    this.publishTweet(post)
    
    this.tweetMessage = "";
    window.location.reload();
  }

  publishTweet (post : any) {
    let posts = this.app.getTweets();
    
    post['id'] = posts.length + 1;
    posts.push(post);
    localStorage.setItem("tweets", JSON.stringify(posts));
  }
}
