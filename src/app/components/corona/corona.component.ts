import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../../services/corona.service';
import { Location } from 'src/app/models/location';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Latest } from 'src/app/models/latest';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {

  latestInfoCards : Latest;
  locationList : Location[] = [];
  countryList : Country[] = [];
  formSearchCountry : FormGroup;
  
  constructor(
    private coronaService:CoronaService,
    private countryService:CountryService,
    private formBuilder: FormBuilder,) 
  { 
    this.formSearchCountry = this.formBuilder.group({
      countryCode:['', [Validators.required]]
    });

    this.listAllLatestCorona();
    this.listAllCountries();
  }

  ngOnInit() {
  }

  listAllCountries(){
    this.countryService.listAllCountries().subscribe(
      (data : Country[]) => {
        this.countryList = data;
      },
      (error)=>{console.log(error)}
    );
  }

  listAllLatestCorona(){
    this.coronaService.listAllLatestLocation().subscribe(
      (data : Location[]) => {
        this.latestInfoCards = data['latest']
        this.locationList = data['locations'];
      },
      (error)=>{console.log(error)}
    );
  }

  getLatestLocationsByCountryCode(){
    console.log(this.formSearchCountry.get('countryCode'))
    const formCountryCode = this.formSearchCountry.get('countryCode').value;
    
    if(formCountryCode == null || formCountryCode == "null"){
      this.listAllLatestCorona();
      return
    }

    this.coronaService.getLatestLocationsByCountryCode(formCountryCode).subscribe(
      (data : Location[]) => {
        this.locationList = data['locations'];
        this.totalConfirmedToLatestInfoCards(formCountryCode);
        this.totalDeathsToLatestInfoCards(formCountryCode);
        this.totalRecovereddToLatestInfoCards(formCountryCode);
      },
      (error)=>{console.log(error)}
    );
  }

  totalConfirmedToLatestInfoCards(countryCode:string){
    this.latestInfoCards.confirmed = this.locationList.filter(location => location.country_code === countryCode)
                        .reduce((sum, current) => sum + current.latest.confirmed, 0);
  }

  totalDeathsToLatestInfoCards(countryCode:string){
    this.latestInfoCards.deaths = this.locationList.filter(location => location.country_code === countryCode)
                        .reduce((sum, current) => sum + current.latest.deaths, 0);
  }

  totalRecovereddToLatestInfoCards(countryCode:string){
    this.latestInfoCards.recovered = this.locationList.filter(location => location.country_code === countryCode)
                        .reduce((sum, current) => sum + current.latest.recovered, 0);
  }

  onSubmit(){
    this.getLatestLocationsByCountryCode();
  }

}
