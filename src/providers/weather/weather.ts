
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherProvider {
apikey;

  constructor(public http: Http) {
   this.apikey='0r7cJb6eMKG0XSKs2kpwwE2c9883a0r1';
  }


   getLocations(value) {
     
      return  this.http.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey='+this.apikey+'&q='+value)
      .map(res=>res.json());
      }

      getDetails(locationkey){
       
    return  this.http.get('http://dataservice.accuweather.com/currentconditions/v1/'+locationkey+'?apikey='+this.apikey+'&details=true')
      .map(res=>res.json());

      }

}
