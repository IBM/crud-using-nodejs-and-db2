//@author Rohith Ravindranath
//@version July 10 2019
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpService } from '../http.service';
import { HouseInfo } from '../models/house-info';
import { AddressInfo } from '../models/address-info';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  rowID:string;
  data:any;

  addressModel:AddressInfo;

  showMessage:boolean;
  showData:boolean;

  errErrorMessage:boolean;
  errMessage:string;

  greenErrorMessage:boolean;
  greenMessage:string;

  model: HouseInfo;

  errFullBath:boolean;
  errHalfBath:boolean;
  errBedroomAbvGr:boolean;
  errKitchenAbvGr:boolean;
  errTotRmsAbvGrd:boolean;
  errPoolArea:boolean;
  errFireplaces:boolean;
  errGarageCars:boolean;
  errMoSold:boolean;
  errYrSold:boolean;
  errSalePrice:boolean;
  errLotArea:boolean;
  errOverallCond:boolean;
  errYearBuilt:boolean;

  validateInputs:boolean;
  data2:any;

  errAddress1:boolean;
  errAddress2:boolean;
  errCity:boolean;
  errState:boolean;
  errZipCode:boolean;
  errCountry:boolean;




  constructor(private _activaterouter:ActivatedRoute, private _httpService:HttpService, private _router: Router) {
    this.rowID = '';
    this.data = [];
    this.data2 = [];

    this.errAddress1 = false;
    this.errAddress2= false;
    this.errCity= false;
    this.errState= false;
    this.errZipCode= false;
    this.errCountry= false;

    this.validateInputs = true;

    this.addressModel = new AddressInfo('', '', '', '', '', '');

    this.model = new HouseInfo('', 'Select BldgType', 'Select HouseStyle', '', '', '', '', '', '', 'Select KitchenQual', '', 'Select Heating', 'Select HeatingQC', 'Select CentralAir', 'Select Electrical', 'Select RoofStyle', 'Select ExterCond', 'Select Foundation', 'Select BsmtCond', '', 'Select PoolQC', '', 'Select FireplaceQu', 'Select GarageType', 'Select GarageFinish', '', 'Select GarageCond', 'Select Fence', '', '', '');


    this.showMessage = true;
    this.showData = false;

    this.errErrorMessage = false;
    this.errMessage = '';

    this.greenErrorMessage= false;
    this.greenMessage = '';


    this.errFullBath = false;
    this.errHalfBath  = false;
    this.errBedroomAbvGr = false;
    this.errKitchenAbvGr = false;
    this.errTotRmsAbvGrd = false;
    this.errPoolArea = false;
    this.errFireplaces = false;
    this.errGarageCars = false;
    this.errMoSold = false;
    this.errYrSold = false;
    this.errSalePrice = false;
    this.errLotArea = false;
    this.errOverallCond = false;
    this.errYearBuilt = false;
  }

  ngOnInit() {
    this._activaterouter.params.subscribe(
      params=>{
        this.rowID = params['id'];
        console.log('rowID: ' + this.rowID);
      })
      this.getDataEntry();
  }



  checkInputs(){
    this.validateInputs = true;

    if(this.model.bldgType.search('Select') != -1){ this.model.bldgType = this.data['BLDGTYPE']; }
    if(this.model.houseStyle.search('Select') != -1){ this.model.houseStyle = this.data['HOUSESTYLE']; }
    if(this.model.kitchenQual.search('Select') != -1){ this.model.kitchenQual = this.data['KITCHENQUAL']; }
    if(this.model.heating.search('Select') != -1){ this.model.heating = this.data['HEATING']; }
    if(this.model.heatingQC.search('Select') != -1){ this.model.heatingQC = this.data['HEATINGQC']; }
    if(this.model.centralAir.search('Select') != -1){this.model.centralAir = this.data['CENTRALAIR']; }
    if(this.model.electrical.search('Select') != -1){ this.model.electrical = this.data['ELECTRICAL']; }
    if(this.model.roofStyle.search('Select') != -1){ this.model.roofStyle = this.data['ROOFSTYLE']; }
    if(this.model.exterCond.search('Select') != -1){ this.model.exterCond = this.data['EXTERCOND']; }
    if(this.model.foundation.search('Select') != -1){ this.model.foundation = this.data['FOUNDATION']; }
    if(this.model.bsmtCond.search('Select') != -1){ this.model.bsmtCond = this.data['BSMTCOND']; }
    if(this.model.poolQC.search('Select') != -1){  this.model.poolQC = this.data['POOLQC'];   }
    if(this.model.fireplaceQu.search('Select') != -1){ this.model.fireplaceQu = this.data['FIREPLACEQU']; }
    if(this.model.garageType.search('Select') != -1){ this.model.garageType = this.data['GARAGETYPE']; }
    if(this.model.garageFinish.search('Select') != -1){ this.model.garageFinish = this.data['GARAGEFINISH']; }
    if(this.model.garageCond.search('Select') != -1){ this.model.garageCond = this.data['GARAGECOND']; }
    if(this.model.fence.search('Select') != -1){ this.model.fence = this.data['FENCE']; }



    if (this.model.lotArea == ''){ this.model.lotArea = this.data['LOTAREA']; this.errLotArea = false;  }
    else{
      if (Number.isNaN(Number(this.model.lotArea))){ this.errLotArea = true;  this.validateInputs = false;}
      else{ this.errLotArea = false; }
    }

    if (this.model.overallCond == ''){ this.model.overallCond = this.data['OVERALLCOND']; this.errOverallCond = false; }
    else{
      if (Number.isNaN(Number(this.model.overallCond))){ this.errOverallCond = true;this.validateInputs = false; }
      else{ this.errOverallCond = false; }
    }

    if (this.model.yearBuilt == ''){ this.model.yearBuilt = this.data['YEARBUILT'];this.errYearBuilt = false; }
    else{
      if (Number.isNaN(Number(this.model.yearBuilt))){ this.errYearBuilt = true; this.validateInputs = false;}
      else{ this.errYearBuilt = false; }
    }

    if (this.model.fullBath == '') { this.model.fullBath = this.data['FULLBATH']; this.errFullBath = false; }
    else{
      if (Number.isNaN(Number(this.model.fullBath))){ this.errFullBath = true; this.validateInputs = false;}
      else{ this.errFullBath = false; }
    }

    if (this.model.halfBath == ''){  this.model.halfBath = this.data['HALFBATH']; this.errHalfBath = false;  }
    else{
      if (Number.isNaN(Number(this.model.halfBath))){ this.errHalfBath = true;this.validateInputs = false; }
      else{ this.errHalfBath = false; }
    }

    if (this.model.bedroomAbvGr == ''){ this.model.bedroomAbvGr = this.data['BEDROOMABVGR']; this.errBedroomAbvGr = false;    }
    else{
      if (Number.isNaN(Number(this.model.bedroomAbvGr))){ this.errBedroomAbvGr = true; this.validateInputs = false;}
      else{ this.errBedroomAbvGr = false; }
    }

    if (this.model.kitchenAbvGr == ''){ this.model.kitchenAbvGr = this.data['KITCHENABVGR']; this.errKitchenAbvGr = false; }
    else{
      if (Number.isNaN(Number(this.model.kitchenAbvGr))){ this.errKitchenAbvGr = true; this.validateInputs = false;}
      else{ this.errKitchenAbvGr = false; }
    }

    if (this.model.tempotRmsAbvGrd == ''){ this.model.tempotRmsAbvGrd = this.data['TOTRMSABVGRD']; this.errTotRmsAbvGrd = false;    }
    else{
      if (Number.isNaN(Number(this.model.tempotRmsAbvGrd))){ this.errTotRmsAbvGrd = true; this.validateInputs = false;}
      else{ this.errTotRmsAbvGrd = false; }
    }

    if (this.model.poolArea == ''){   this.model.poolArea = this.data['POOLAREA'];this.errPoolArea = false;    }
    else{
      if (Number.isNaN(Number(this.model.poolArea))){ this.errPoolArea = true;this.validateInputs = false; }
      else{ this.errPoolArea = false; }
    }

    if (this.model.fireplaces == ''){        this.model.fireplaces = this.data['FIREPLACES'];      this.errFireplaces = false;    }
    else{
      if (Number.isNaN(Number(this.model.fireplaces))){ this.errFireplaces = true;this.validateInputs = false; }
      else{ this.errFireplaces = false; }
    }

    if (this.model.garageCars == ''){     this.model.garageCars = this.data['GARAGECARS'];     this.errGarageCars = false;  }
    else{
      if (Number.isNaN(Number(this.model.garageCars))){ this.errGarageCars = true;this.validateInputs = false; }
      else{ this.errGarageCars = false; }
    }

    if (this.model.moSold == ''){      this.model.moSold = this.data['MOSOLD'];    this.errMoSold = false;    }
    else{
      if (Number.isNaN(Number(this.model.moSold))){ this.errMoSold = true;this.validateInputs = false; }
      else{ this.errMoSold = false; }
    }

    if (this.model.yrSold == ''){   this.model.yrSold = this.data['YRSOLD'];    this.errYrSold = false;  }
    else{
      if (Number.isNaN(Number(this.model.yrSold))){ this.errYrSold = true;this.validateInputs = false; }
      else{ this.errYrSold = false; }
    }

    if (this.model.salePrice == ''){       this.model.salePrice = this.data['SALEPRICE'];       this.errSalePrice = false;     }
    else{
       if (Number.isNaN(Number(this.model.salePrice))){ this.errSalePrice = true; this.validateInputs = false;}
       else{ this.errSalePrice = false; }
    }

    if (this.addressModel.zipcode == ''){

           this.addressModel.zipcode = this.data2['ZIPCODE'];

           this.errZipCode = false;
    }
    else{

       if (Number.isNaN(Number(this.addressModel.zipcode))){ this.errZipCode = true; this.validateInputs = false;}
       else{ this.errZipCode = false; }
    }

    if (this.addressModel.address1 == ''){      this.addressModel.address1 = this.data2['ADDRESS1'];       this.errAddress1 = false;     }
    if (this.addressModel.address2 == ''){      this.addressModel.address2 = this.data2['ADDRESS2'];       this.errAddress2 = false;     }
    if (this.addressModel.city == ''){      this.addressModel.city = this.data2['CITY'];       this.errCity = false;     }
    if (this.addressModel.state == ''){      this.addressModel.state = this.data2['STATE'];       this.errState = false;     }
    if (this.addressModel.country == ''){      this.addressModel.country = this.data2['COUNTRY'];       this.errCountry = false;     }




    console.log(this.model);
    return this.validateInputs;

  }

  submitData(){
    var check = this.checkInputs();
    console.log(check);
    if (check == false){
      this.errMessage = 'Please enter the fields correctly!';
      this.errErrorMessage = true;
      window.scrollTo(0 , 0);
    }
    else{
      console.log(this.addressModel)
      this.errErrorMessage = false;
      var dataObs = this._httpService.updateDataEntry(this.rowID,this.model, this.addressModel);
      dataObs.subscribe(data=>{
        if(data['success'] != 1){
          console.log(data['message']);
        }
        else{
          console.log(data['message']);
          localStorage.setItem("dataUpdated","true");
          this._router.navigate(['/viewData']);
        }
      })
    }

  }

  getDataEntry(){
    var dataObs = this._httpService.getUniqueDataFromDatabase(this.rowID);
    dataObs.subscribe(data=>{
      if(data['success'] != 1){
        console.log(data['message']);
      }
      else{


        this.data = data['data'][0];
        this.data2 = data['data2'][0];
        this.showMessage = false;
        this.showData = true;
        console.log(this.data2);
        console.log(this.data);

      }
    })
  }

}
