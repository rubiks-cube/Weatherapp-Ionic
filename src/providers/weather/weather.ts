
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherProvider {
apikey;

  constructor(public http: Http) {
   this.apikey='1v4QZ9sBoAn2rjjK3kHIGPuWXIGTXU6c';
  }


   getLocations(value) {
     
      return  this.http.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey='+this.apikey+'&q='+value)
      .map(res=>res.json());
      }

      getDetails(locationkey){
       
    return  this.http.get('http://dataservice.accuweather.com/currentconditions/v1/'+locationkey+'?apikey='+this.apikey+'&details=true')
      .map(res=>res.json());

      }

      getKey(lat,lng){
        console.log(lat);
        console.log(lng);
        return this.http.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey='+this.apikey+'&q='+lat+','+lng+'&details=true&toplevel=true')
        .map(res=>res.json());
      }

}
