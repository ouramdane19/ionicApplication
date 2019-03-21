
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class GalleryService{
  public host:string="https://pixabay.com/api/";
  public key:string="";


  constructor(private http:HttpClient){

  }

chercher(query:string,size:number,page:number){
  return this.http.get(this.host+"?key="+this.key+"&q="+query+"&par_page="+size+"&page="+page);

}
}
