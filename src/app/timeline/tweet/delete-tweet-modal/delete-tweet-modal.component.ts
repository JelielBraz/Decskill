import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-delete-tweet-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-tweet-modal.component.html',
  styleUrls: ['./delete-tweet-modal.component.css']
})
export class DeleteTweetModalComponent {
  @Input() id: number = 0;
  @Input() app: AppComponent = new AppComponent;

  constructor(public activeModal: NgbActiveModal) {}


  confirmDelete() {
    let tweets = this.app.getTweets();
    let newTweets = tweets.filter(f => f.id !== this.id);
    
    localStorage.setItem("tweets", JSON.stringify(newTweets));


    this.close();
    window.location.reload();
  }
  
  close() {
    this.activeModal.close();
  }
}
