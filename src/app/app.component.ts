import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template:'<router-outlet></router-outlet>',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ordenalyApp';
}
