import { Component } from '@angular/core';
import {slideInAnimation} from './addcard/animate';
@Component({
  selector: 'app-root',
  animations: [
    slideInAnimation
    // animation triggers go here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
  title = 'FunStays';
}
