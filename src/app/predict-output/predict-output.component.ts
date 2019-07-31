//@author Rohith Ravindranath
//@version July 10 2019
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService }  from '../http.service';
import { PredictHouseInfo } from '../models/predict-house-info';
import { AddressInfo } from '../models/address-info';
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

  model: PredictHouseInfo;
  addressModel: AddressInfo;

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
    this.salePrice = '';
    this.averageSalePrice = '';

    this.model = new PredictHouseInfo('', 'Select BldgType', 'Select HouseStyle', '', '', '', '', '', '', 'Select KitchenQual', '', 'Select Heating', 'Select HeatingQC', 'Select CentralAir', 'Select Electrical', 'Select RoofStyle', 'Select ExterCond', 'Select Foundation', 'Select BsmtCond', '', 'Select PoolQC', '', 'Select FireplaceQu', 'Select GarageType', 'Select GarageFinish', '', 'Select GarageCond', 'Select Fence', '', '');

    this.addressModel = new AddressInfo('', ' ', '', '', '', '');

  }


  ngOnInit() {
    this.showData = false;
    this.showMessage = true;

    this.model = (JSON.parse(localStorage.getItem('prediction_data')));

    if (localStorage.getItem('ml-model') === 'db2') {
        this.salePrice = (JSON.parse(localStorage.getItem('predicted_value'))['salePrice']);
    } else {
        this.salePrice = (JSON.parse(localStorage.getItem('predicted_value'))['value']);
    }

    this.addressModel = (JSON.parse(localStorage.getItem('address')));
    this.getGeoCode();
  }

  getGeoCode(){
    var geo = this._httpService.getCoordinates(this.addressModel['address1'], this.addressModel['city'],this.addressModel['state'],this.addressModel['zipcode']);
    geo.subscribe(data => {
      console.log(data);
      if (data['success'] != 1){
        console.log(data['message']);
      }
      this.lat = data['data'][0]['latitude'];
      this.lng = data['data'][0]['longitude'];
    })
    console.log(this.model);
    this.showData = true;
    this.showMessage = false;
  }

}
