export class Place {
  title:string;
  country?:string; //non obligatoire pour dans l'objet
  city?:string;
  timeStamp?:number;
  motsCles?:string;

  location?:{
    longitude:number,
    latitude:number,
    altitude:number
  };

  selected?:boolean=false;

  photos?:Array<string>;
}


