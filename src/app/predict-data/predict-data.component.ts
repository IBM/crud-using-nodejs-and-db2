import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService }  from '../http.service';
import { PredictHouseInfo } from '../models/predict-house-info';

@Component({
  selector: 'app-predict-data',
  templateUrl: './predict-data.component.html',
  styleUrls: ['./predict-data.component.css']
})
export class PredictDataComponent implements OnInit {

  model:PredictHouseInfo;


  errLotArea:boolean;
  errBldgType:boolean;
  errHouseStyle:boolean;
  errOverallCond:boolean;
  errYearBuilt:boolean;
  errRoofStyle:boolean;
  errExterCond:boolean;
  errFoundation:boolean;
  errBsmtCond:boolean;
  errHeating:boolean;
  errHeatingQC:boolean;
  errCentralAir:boolean;
  errElectrical:boolean;
  errFullBath:boolean;
  errHalfBath:boolean;
  errBedroomAbvGr:boolean;
  errKitchenAbvGr:boolean;
  errKitchenQual:boolean;
  errTotRmsAbvGrd:boolean;
  errFireplaces:boolean;
  errFireplaceQu:boolean;
  errGarageType:boolean;
  errGarageFinish:boolean;
  errGarageCars:boolean;
  errGarageCond:boolean;
  errPoolArea:boolean;
  errPoolQC:boolean;
  errFence:boolean;
  errMoSold:boolean;
  errYrSold:boolean;
  errSalePrice:boolean;
  validate_inputs:boolean;
  message:string;
  showMessage:boolean;
  showPredictedValues:boolean;
  showErrorMessage:boolean;


  errAddress1:boolean;
  errAddress2:boolean;
  errCity:boolean;
  errState:boolean;
  errZipCode:boolean;
  errCountry:boolean;
  showClearDataMessage:boolean;


  constructor(private _router:Router, private _httpService:HttpService) {

    this.model = new PredictHouseInfo('','','','','','','', 'Select BldgType', 'Select HouseStyle', '', '', '', '', '', '', 'Select KitchenQual', '', 'Select Heating', 'Select HeatingQC', 'Select CentralAir', 'Select Electrical', 'Select RoofStyle', 'Select ExterCond', 'Select Foundation', 'Select BsmtCond', '', 'Select PoolQC', '', 'Select FireplaceQu', 'Select GarageType', 'Select GarageFinish', '', 'Select GarageCond', 'Select Fence', '', '');


    this.errAddress1 = false;
    this.errAddress2= false;
    this.errCity= false;
    this.errState= false;
    this.errZipCode= false;
    this.errCountry= false;
    this.showErrorMessage = false;
    this.errLotArea = false;
    this.errBldgType= false;
    this.errHouseStyle= false;
    this.errOverallCond= false;
    this.errYearBuilt= false;
    this.errRoofStyle= false;
    this.errExterCond= false;
    this.errFoundation= false;
    this.errBsmtCond= false;
    this.errHeating= false;
    this.errHeatingQC= false;
    this.errCentralAir= false;
    this.errElectrical= false;
    this.errFullBath= false;
    this.errHalfBath= false;
    this.errBedroomAbvGr= false;
    this.errKitchenAbvGr= false;
    this.errKitchenQual= false;
    this.errTotRmsAbvGrd= false;
    this.errFireplaces= false;
    this.errFireplaceQu= false;
    this.errGarageType= false;
    this.errGarageFinish= false;
    this.errGarageCars= false;
    this.errGarageCond= false;
    this.errPoolArea= false;
    this.errPoolQC= false;
    this.errFence= false;
    this.errMoSold= false;
    this.errYrSold= false;
    this.errSalePrice= false;
    this.showClearDataMessage = false;
    this.validate_inputs = true;

    this.showMessage = true;
    this.showPredictedValues = false;
    this.message = 'Enter All Fields For Model!'

  }

  ngOnInit() {
  }


  predict(){
    this.showClearDataMessage = false;
    if(!this.validateInputs()){
  //  if(!true){
      this.showErrorMessage = true;
      window.scrollTo(0 , 0);
    }
    else{
      this.showErrorMessage = false;
      var err=this._httpService.predict(this.model);



      err.subscribe(data=>{

        console.log(err)
        //data = JSON.parse(data);
        console.log("response:", data);

        console.log(data['lotArea']);


         localStorage.setItem("predictOutput",JSON.stringify(data));
           this._router.navigate(['/predictOutput']);

      },
      error => console.log(error['status']) ) // error path)
    }
  }

  clear(){
    this.model = new PredictHouseInfo('','','','','','','', 'Select BldgType', 'Select HouseStyle', '', '', '', '', '', '', 'Select KitchenQual', '', 'Select Heating', 'Select HeatingQC', 'Select CentralAir', 'Select Electrical', 'Select RoofStyle', 'Select ExterCond', 'Select Foundation', 'Select BsmtCond', '', 'Select PoolQC', '', 'Select FireplaceQu', 'Select GarageType', 'Select GarageFinish', '', 'Select GarageCond', 'Select Fence', '', '');
    this.errLotArea = false;
    this.errBldgType= false;
    this.errHouseStyle= false;
    this.errOverallCond= false;
    this.errYearBuilt= false;
    this.errRoofStyle= false;
    this.errExterCond= false;
    this.errFoundation= false;
    this.errBsmtCond= false;
    this.errHeating= false;
    this.errHeatingQC= false;
    this.errCentralAir= false;
    this.errElectrical= false;
    this.errFullBath= false;
    this.errHalfBath= false;
    this.errBedroomAbvGr= false;
    this.errKitchenAbvGr= false;
    this.errKitchenQual= false;
    this.errTotRmsAbvGrd= false;
    this.errFireplaces= false;
    this.errFireplaceQu= false;
    this.errGarageType= false;
    this.errGarageFinish= false;
    this.errGarageCars= false;
    this.errGarageCond= false;
    this.errPoolArea= false;
    this.errPoolQC= false;
    this.errFence= false;
    this.errMoSold= false;
    this.errYrSold= false;
    this.errSalePrice= false;
    this.showErrorMessage = false;
    this.showClearDataMessage = true;
    this.errAddress1 = false;
    this.errAddress2= false;
    this.errCity= false;
    this.errState= false;
    this.errZipCode= false;
    this.errCountry= false;
    window.scrollTo(0 , 0);
  }

  validateInputs(){
    this.validate_inputs = true;
    if(this.model.bldgType.search('Select') != -1){ this.errBldgType= true; this.validate_inputs=false; }
    else{ this.errBldgType= false; }
    if(this.model.houseStyle.search('Select') != -1){ this.errHouseStyle= true; this.validate_inputs=false; }
    else{ this.errHouseStyle= false; }
    if(this.model.kitchenQual.search('Select') != -1){ this.errKitchenQual= true; this.validate_inputs=false; }
    else{ this.errKitchenQual= false; }
    if(this.model.heating.search('Select') != -1){ this.errHeating= true; this.validate_inputs=false; }
    else{ this.errHeating= false; }
    if(this.model.heatingQC.search('Select') != -1){ this.errHeatingQC= true; this.validate_inputs=false; }
    else{ this.errHeatingQC= false; }
    if(this.model.centralAir.search('Select') != -1){ this.errCentralAir= true; this.validate_inputs=false; }
    else{ this.errCentralAir= false; }
    if(this.model.electrical.search('Select') != -1){ this.errElectrical= true; this.validate_inputs=false; }
    else{ this.errElectrical= false; }
    if(this.model.roofStyle.search('Select') != -1){ this.errRoofStyle= true; this.validate_inputs=false; }
    else{ this.errRoofStyle= false; }
    if(this.model.exterCond.search('Select') != -1){ this.errExterCond= true; this.validate_inputs=false; }
    else{ this.errExterCond= false; }
    if(this.model.foundation.search('Select') != -1){ this.errFoundation= true; this.validate_inputs=false; }
    else{ this.errFoundation= false; }
    if(this.model.bsmtCond.search('Select') != -1){ this.errBsmtCond= true; this.validate_inputs=false; }
    else{ this.errBsmtCond= false; }
    if(this.model.poolQC.search('Select') != -1){ this.errPoolQC= true; this.validate_inputs=false; }
    else{ this.errPoolQC= false; }
    if(this.model.fireplaceQu.search('Select') != -1){ this.errFireplaceQu= true; this.validate_inputs=false; }
    else{ this.errFireplaceQu= false; }
    if(this.model.garageType.search('Select') != -1){ this.errGarageType= true; this.validate_inputs=false; }
    else{ this.errGarageType= false; }
    if(this.model.garageFinish.search('Select') != -1){ this.errGarageFinish= true; this.validate_inputs=false; }
    else{ this.errGarageFinish= false; }
    if(this.model.garageCond.search('Select') != -1){ this.errGarageCond= true; this.validate_inputs=false; }
    else{ this.errGarageCond= false; }
    if(this.model.fence.search('Select') != -1){ this.errFence= true; this.validate_inputs=false; }
    else{ this.errFence= false; }


    if (this.model.lotArea == ''){  this.errLotArea = true; this.validate_inputs=false; }
    else{ this.errLotArea = false;}
    if (this.model.overallCond == ''){  this.errOverallCond = true;  this.validate_inputs=false;}
    else{ this.errOverallCond = false;}
    if (this.model.yearBuilt == ''){  this.errYearBuilt = true;  this.validate_inputs=false;}
    else{ this.errYearBuilt = false;}
    if (this.model.fullBath == '') {  this.errFullBath = true; this.validate_inputs=false; }
    else{ this.errFullBath = false;}
    if (this.model.halfBath == ''){  this.errHalfBath = true; this.validate_inputs=false; }
    else{ this.errHalfBath = false;}
    if (this.model.bedroomAbvGr == ''){  this.errBedroomAbvGr = true; this.validate_inputs=false; }
    else{ this.errBedroomAbvGr = false;}
    if (this.model.kitchenAbvGr == ''){  this.errKitchenAbvGr = true; this.validate_inputs=false; }
    else{ this.errKitchenAbvGr = false;}
    if (this.model.totalRmsAbvGrd == ''){  this.errTotRmsAbvGrd = true; this.validate_inputs=false; }
    else{ this.errTotRmsAbvGrd = false;}
    if (this.model.poolArea == ''){  this.errPoolArea = true; this.validate_inputs=false; }
    else{ this.errPoolArea = false;}
    if (this.model.fireplaces == ''){  this.errFireplaces = true; this.validate_inputs=false; }
    else{ this.errFireplaces = false;}
    if (this.model.garageCars == ''){  this.errGarageCars = true; this.validate_inputs=false; }
    else{ this.errGarageCars = false;}
    if (this.model.moSold == ''){  this.errMoSold = true;  this.validate_inputs=false;}
    else{ this.errMoSold = false;}
    if (this.model.yrSold == ''){  this.errYrSold = true; this.validate_inputs=false; }
    else{ this.errYrSold = false;}

    if (this.model.address1 == ''){  this.errAddress1 = true; this.validate_inputs=false; }
    else{ this.errAddress1 = false;}
    if (this.model.address2 == ''){  this.errAddress2 = true; this.validate_inputs=false; }
    else{ this.errAddress2 = false;}
    if (this.model.city == ''){  this.errCity = true; this.validate_inputs=false; }
    else{ this.errCity = false;}
    if (this.model.state == ''){  this.errState = true; this.validate_inputs=false; }
    else{ this.errState = false;}
    if (this.model.zipcode == ''){  this.errZipCode = true; this.validate_inputs=false; }
    else{ this.errZipCode = false;}
    if (this.model.country == ''){  this.errCountry = true; this.validate_inputs=false; }
    else{ this.errCountry = false;}



    return this.validate_inputs

  }

}
