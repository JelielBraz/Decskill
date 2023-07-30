import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  getTweets () : any[] {
    let posts = [];
    let postsCurrentStorage = localStorage.getItem("tweets");
    if (postsCurrentStorage !== null) {
      posts = JSON.parse(postsCurrentStorage);
    }

    return posts;
  }
}
