import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {WeatherProvider} from  '../../providers/weather/weather';
/**
 * Generated class for the LocatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locate',
  templateUrl: 'locate.html',
})
export class LocatePage {
lat:number;
lng:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public weatherProvider:WeatherProvider) {
  }

  truncateDecimals (number, digits) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
};


  ionViewWillEnter() {
  
    this.lat=this.truncateDecimals(this.navParams.data.lat,2);
    this.lng=this.truncateDecimals(this.navParams.data.lng,2);
    
  }

  onDone(){
  	console.log('hi');
     this.weatherProvider.getKey(this.lat,this.lng).subscribe((data)=>{
        localStorage.setItem('itemfinalkey',data.Key);
        let name=data.EnglishName+','+data.AdministrativeArea.ID+','+data.Country.EnglishName;
        localStorage.setItem('itemfinalname',name);
        this.viewCtrl.dismiss(name);
     });

  	
  }

}
