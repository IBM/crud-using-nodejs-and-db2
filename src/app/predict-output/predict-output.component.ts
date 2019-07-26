//@author Rohith Ravindranath
//@version July 10 2019
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService }  from '../http.service';
import { PredictHouseInfo } from '../models/predict-house-info';
import { library } from '@fortawesome/fontawesome-svg-core';
import {  MapsAPILoader }  from '@agm/core';
import { faImage, faClock, faBed, faCar, faBuilding, faDoorOpen, faFire, faHome, faSwimmer, faBath } from '@fortawesome/free-solid-svg-icons';
library.add(faImage, faClock, faDoorOpen, faFire,faHome, faBuilding, faCar, faBed, faSwimmer,faBath);




@Component({
  selector: 'app-predict-output',
  templateUrl: './predict-output.component.html',
  styleUrls: ['./predict-output.component.css']
})
export class PredictOutputComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  lotArea:string;
  yearBuilt:string;
  bed:string;
  rooms:string;
  condition:string;
  fireplace:string;
  garage:string;
  bath:string;
  salePrice:string;
  averageSalePrice:string;
  showData:boolean;
  showMessage:boolean;
  model:any;

  constructor(private _router:Router, private _httpService:HttpService) {
    this.showData = false;
    this.showMessage = true;
    this.lotArea='';
    this.yearBuilt = '';
    this.bed = '';
    this.rooms = '';
    this.condition = '';
    this.fireplace = '';
    this.garage = '';
    this.bath = '';
    this.model = [];
    this.salePrice = '';
    this.averageSalePrice = '';
  }


  ngOnInit() {
    this.showData = false;
    this.showMessage = true;
    this.model = JSON.parse(localStorage.getItem("predictOutput"));
    this.getGeoCode();
  }

  getGeoCode(){
    var geo = this._httpService.getCoordinates(this.model['address1'], this.model['city'],this.model['state'],this.model['zipcode']);
    geo.subscribe(data => {
      if (data['success'] != 1){
        console.log(data['message']);
      }
      this.lat = data['data'][0]['latitude'];
      this.lng = data['data'][0]['longitude'];
    })
    this.showData = true;
    this.showMessage = false;
  }

}
