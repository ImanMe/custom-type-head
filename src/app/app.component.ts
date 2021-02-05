import { Dealer } from './dealer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auto-complete';
  buttonText = 'test';

  isMenuVisible = true;

  menuTitle: Dealer = { id: 'C04936', name: '21st Century Motors Inc.' };

  onDealerSelect = (dealer: Dealer) => {
    this.menuTitle = dealer;
  }
  toggle = () => {
    this.isMenuVisible = !this.isMenuVisible;
  }
}


