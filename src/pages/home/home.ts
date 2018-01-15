import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {WeatherProvider} from  '../../providers/weather/weather';

@Component({
  
  templateUrl: 'home.html'
})
export class HomePage {
  item1={
    "Version": 1,
    "Key": "202396",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Delhi",
    "Country": {
      "ID": "IN",
      "LocalizedName": "India"
    },
    "AdministrativeArea": {
      "ID": "DL",
      "LocalizedName": "Delhi"
    }
  };
  weather;
  key;
  item;
  location;
 constructor(public navCtrl: NavController,public weatherProvider:WeatherProvider) {

}


setDefaults(){
if(localStorage.getItem('itemfinalkey')==null){
	//sconsole.log(11);

this.key=202396;
this.location='Delhi'+','+'DL'+','+'IN';
//this.getWeather(this.key);
}else{
	
	this.location=localStorage.getItem('itemfinalname');
	this.key=localStorage.getItem('itemfinalkey');
//	this.getWeather(this.key);
}
	
  }


  getWeather(key1){
  	
  	this.weatherProvider.getDetails(key1).subscribe(data=>{
  	
  		this.weather=data;
  		
  	});
  }


reload(){
  
 // console.log(this.weather[0].WeatherText);
  this.setDefaults();
  this.getWeather(this.key);
  
 // console.log(this.weather[0].WeatherText);
}


  ionViewWillEnter(){
this.setDefaults();
  	this.getWeather(this.key);
  }
 
}
