import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})

export class TweetComponent {
  @Input() tweet: any;
  assetsPath : string = '';

  constructor(private location: Location){}
  

  ngOnInit() {
    debugger;
    this.assetsPath = this.location.path();
  }
  getImagePath() {
    console.log(this.tweet);
    return this.assetsPath + '/images/' + this.tweet.picturePath;
  }
}
