import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { PostCreatorComponent } from './post-creator/post-creator.component';
import { TimelineComponent } from './timeline/timeline.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NavComponent,
    PostCreatorComponent,
    TimelineComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
