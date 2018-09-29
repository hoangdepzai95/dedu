import { Component } from '@angular/core';
import { LayoutService } from './modules/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edu';

  constructor(public layoutService: LayoutService) {
  }


  showHeader() {
      return
  }
}
