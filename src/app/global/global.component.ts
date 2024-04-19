import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrl: './global.component.css'
})
export class GlobalComponent  implements OnInit{
  APIkey:string = '0a492b2f5e9f01a96cd1578575794ecc';
  worklist:any;
  lat:number=0;
  lon:number=0;
  dt:number=1643803200;
  c:number=0;
  x!:number;
  constructor (private http:HttpClient)
  {
    this.worklist=[];
  }

  cityName: string = "london" ;

  ngOnInit():void{
    this.getJson();
  }

  getJson()
  {
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.APIkey}`)
    .subscribe((result:any)=>{
      this.worklist = result;
      this.c = result.main.temp
      this.x = ((this.c- 273.15));
      console.log(result);
    },
  );
  }

  
}
