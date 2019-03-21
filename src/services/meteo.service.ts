
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class MeteoService{
  public host:string="http://api.openweathermap.org/data/2.5/forecast";
  public key:string="";


  constructor(private http:HttpClient){

  }

  chercher(query:string){

    //return this.http.get(this.host+"?q="+query+"&APPID="+this.key);
    return this.http.get("http://api.openweathermap.org/data/2.5/forecast?q="+query+"&APPID="+this.key);
  }
}


