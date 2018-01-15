import { Component } from '@angular/core';
import { NavController,ModalController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {WeatherProvider} from  '../../providers/weather/weather';
import{LocatePage} from '../locate/locate';
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
  cords:{lat:number,lng:number}={lat:0,lng:0};
 constructor(public navCtrl: NavController,public weatherProvider:WeatherProvider,public modalController:ModalController,
  private geolocation:Geolocation) {

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



onLocate(){

let options = { enableHighAccuracy: true};
 // console.log(22);
    this.geolocation.getCurrentPosition(options).then((location) => {
      console.log('iii');

    this.cords.lat=location.coords.latitude;
       this.cords.lng=location.coords.longitude;
       console.log(this.cords);
       let mo=this.modalController.create(LocatePage,this.cords,{enableBackdropDismiss:false});
        mo.onDidDismiss(data => {
          console.log('ml');
     this.reload();
   });

        mo.present();
 
}).catch((err) => {

  console.log(JSON.stringify(err));
});


  

}






  ionViewWillEnter(){
this.setDefaults();
  	this.getWeather(this.key);
  }
 
}
