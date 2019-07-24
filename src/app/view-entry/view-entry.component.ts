import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpService } from '../http.service';
import { library } from '@fortawesome/fontawesome-svg-core';
import { HouseInfo } from '../models/house-info';
import { AddressInfo } from '../models/address-info';
import { MapsAPILoader } from '@agm/core';
import { faImage, faClock, faBed, faCar, faBuilding, faDoorOpen, faFire, faHome, faSwimmer, faBath } from '@fortawesome/free-solid-svg-icons';
library.add(faImage, faClock, faDoorOpen, faFire,faHome, faBuilding, faCar, faBed, faSwimmer,faBath);

declare var google: any;
@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.component.html',
  styleUrls: ['./view-entry.component.css']
})
export class ViewEntryComponent implements OnInit {
  private geocoder: any;
  lat: number = 51.678418;
  lng: number = 7.809007;
  data:any;
  data2:any;
  viewData:boolean;
  rowID:string;
  addressModel:AddressInfo;
  model: HouseInfo;
  hideData:boolean;

  public query: string;
    public position: string;


  constructor(private router:Router, private httpService:HttpService, private activaterouter:ActivatedRoute, private mapLoader: MapsAPILoader) {
    this.rowID = '';
    this.addressModel = new AddressInfo('', '', '', '', '', '');
    this.data = [];
    this.data2 = [];
    this.query = 'Tracy, CA';
    this.position = '37.7397,-121.4252';
    this.hideData = true;
    this.model = new HouseInfo('', 'Select BldgType', 'Select HouseStyle', '', '', '', '', '', '', 'Select KitchenQual', '', 'Select Heating', 'Select HeatingQC', 'Select CentralAir', 'Select Electrical', 'Select RoofStyle', 'Select ExterCond', 'Select Foundation', 'Select BsmtCond', '', 'Select PoolQC', '', 'Select FireplaceQu', 'Select GarageType', 'Select GarageFinish', '', 'Select GarageCond', 'Select Fence', '', '', '');
    this.viewData = false;

  }

  ngOnInit() {
    this.activaterouter.params.subscribe(
      params => {
        this.rowID = params['id'];
      })
      this.getDataEntry();
  }

  getDataEntry(){
    var dataObs = this.httpService.getUniqueDataFromDatabase(this.rowID);
    dataObs.subscribe(data => {
      if(data['success'] != 1){
        console.log(data['message']);
      } else {
        this.data = data['data'][0];        
        this.data2 = data['data2'][0];

        var geo = this.httpService.getCoordinates(this.data2['ADDRESS1'], this.data2['CITY'],this.data2['STATE'],this.data2['ZIPCODE']);
        geo.subscribe(data => {          
          if (data['success'] != 1){
            console.log(data['message']);
          }
          this.lat = data['data'][0]['latitude'];
          this.lng = data['data'][0]['longitude'];
        })
        this.viewData = true;
        this.hideData = false;
      }
    })
  }

}
