import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trial-tracker-main-page';

  pageDisplayed = "drawer"

  onNavigatePage(page: string) {
    this.pageDisplayed = page;
  }
}
