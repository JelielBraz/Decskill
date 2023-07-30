import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteTweetModalComponent } from './delete-tweet-modal/delete-tweet-modal.component';

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

  constructor(private location: Location, private modalService: NgbModal){}

  openDeleteModalTweet() {
    const a = this.modalService.open(DeleteTweetModalComponent);
    a.componentInstance.id = this.tweet.id;

  }

  ngOnInit() {
    this.assetsPath = this.location.path();
  }
  getImagePath() {
    return this.assetsPath + '/assets/images/' + this.tweet.picturePath;
  }
}
