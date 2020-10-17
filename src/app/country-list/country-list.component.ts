import { Component, OnInit } from '@angular/core';
import {Country} from '../shared/Country';
import {COUNTRIES} from '../shared/Countries';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries = COUNTRIES;
  changeDesc: Country;
  constructor() { }

  ngOnInit(): void {
  }

  onChangeCountry(country: Country): void
  {
    this.changeDesc = country;
  }

}
