import { Component } from '@angular/core';
import { Tooltip, initTWE } from 'tw-elements';
import { CountriesService } from './countries/services/countries.service';
import { Country } from './countries/interfaces/country';

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
