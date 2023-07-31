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
  tweetTime : string = '';

  constructor(private location: Location, private modalService: NgbModal){}

  openDeleteModalTweet() {
    const deleteTweetModalComponent  = this.modalService.open(DeleteTweetModalComponent);
    deleteTweetModalComponent.componentInstance.id = this.tweet.id;

  }

  ngOnInit() {
    this.assetsPath = this.location.path();
    this.setTweetTime();
  }

  setTweetTime() {
    let diference  = new Date().getTime() - new Date(this.tweet.dateTime).getTime();
    let timeMathDenominators : Object = this.getTimeMathDenominator();

    
    for (let t in timeMathDenominators) {
      let timeMathDenominator = timeMathDenominators[t as keyof Object];
      let denominator : number = +timeMathDenominator['mathDenominator' as keyof Object];
      diference = diference / denominator;

      let condition : number = +timeMathDenominator['condition' as keyof Object];
      if (diference < condition) {
        let time : string = "" + timeMathDenominator['time' as keyof Object];
        this.tweetTime = Math.floor(diference) + time;
        break;
      }
    }      
  }

  getImagePath() {
    return this.assetsPath + '/assets/images/' + this.tweet.picturePath;
  }

  getTimeMathDenominator() : Object {
    return{
      0: {
        time: 's',
        mathDenominator: 1000,
        condition: 60

      },
      1: {
        time: 'min',
        mathDenominator: 60,
        condition: 60
      },
      2: {
        time: 'h',
        mathDenominator: 60,
        condition: 24
        
      },
      3: {
        time: 'd',
        mathDenominator: 24,
        condition: 60
      },
      4: {
        time: 'm',
        mathDenominator: 30,
        condition: 12
      },
      5: {
        time: 'y',
        mathDenominator: 12,
        condition: 9999
      }
    }
  }
}
