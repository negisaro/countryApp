import { Component } from '@angular/core';
import { Tooltip, initTWE } from 'tw-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'countryApp';
  ngOnInit() {
    initTWE({ Tooltip });
  }
}
