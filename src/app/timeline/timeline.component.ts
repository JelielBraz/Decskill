import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { TweetComponent } from './tweet/tweet.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, TweetComponent],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  @Input()
  app: AppComponent = new AppComponent;

  tweets = this.app.getTweets();
}
