import { Component } from '@angular/core';
import carData from 'C:/Users/aidin/Portfolio/src/assets/data/car.json'
interface Car{
  id:number;
  Make:string;
  Model:string;
}
@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrl: './local.component.css'
})
export class LocalComponent {


 myCar: Car[] = carData;
}
