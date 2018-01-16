import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeatherProvider} from  '../../providers/weather/weather';
import {HomePage} from '../home/home';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

items:any;
itemfinal;
search;
showlist;
isenabled;
keyfinal;

 constructor(public navCtrl: NavController, public navParams: NavParams,public weatherProvider:WeatherProvider) {
  //this.showlist=true;
    if(this.search != ''){

this.isenabled=true; 
}
else{

this.isenabled=false;
}

  }




//loc:String;

  


  getItems(ev: any) {
  	this.showlist=true;
   // this.loc='';
   this.keyfinal=null;
    this.items=[];

let val = ev.target.value;
 

if(val.length<=0){
	this.isenabled=true;
}


   if(val.length>0){
   	 console.log(val);
    this.weatherProvider.getLocations(val).subscribe(data=>{
       for(let i=0;i<data.length;i++){
       
        //console.log(data[i]);

       // console.log(loc);
        this.items.push(data[i]);
       // console.log(city);
       }


    });}
    return this.items;

    }
  
addInput(ite){
	this.search=ite.LocalizedName+','+ite.AdministrativeArea.ID+','+ite.Country.LocalizedName;
	this.showlist=false;
	this.isenabled=false;
	this.itemfinal=ite;
}

  getResults(){
    let name=this.itemfinal.LocalizedName+','+this.itemfinal.AdministrativeArea.ID+','+this.itemfinal.Country.LocalizedName
  	if(this.itemfinal!=null){
      localStorage.setItem('itemfinalkey',this.itemfinal.Key);
      localStorage.setItem('itemfinalname',name);
      this.search='';
      this.isenabled=true;
      //console.log(localStorage.itemfinalname);
    this.navCtrl.push(HomePage);
  	}else{

  	}

  }

  

}
