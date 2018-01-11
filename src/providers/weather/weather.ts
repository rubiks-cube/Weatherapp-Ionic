
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherProvider {


  constructor(public http: Http) {
   
  }


   getLocations(value) {
     
      return  this.http.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=0r7cJb6eMKG0XSKs2kpwwE2c9883a0r1&q='+value)
      .map(res=>res.json());
      }

      getDetails(key){
       console.log(key);
    return  this.http.get('http://dataservice.accuweather.com/currentconditions/v1/'+key+'?apikey=0r7cJb6eMKG0XSKs2kpwwE2c9883a0r1&details=true')
      .map(res=>res.json());

      }

}
