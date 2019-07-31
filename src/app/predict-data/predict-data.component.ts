import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { PredictHouseInfo } from '../models/predict-house-info';
import { AddressInfo } from '../models/address-info';

@Component({
  selector: 'app-predict-data',
  templateUrl: './predict-data.component.html',
  styleUrls: ['./predict-data.component.css']
})
export class PredictDataComponent implements OnInit {

  model: PredictHouseInfo;
  addressModel: AddressInfo;
  predictOption: string;

  errPredictOption = false;
  errLotArea: boolean;
  errBldgType: boolean;
  errHouseStyle: boolean;
  errOverallCond: boolean;
  errYearBuilt: boolean;
  errRoofStyle: boolean;
  errExterCond: boolean;
  errFoundation: boolean;
  errBsmtCond: boolean;
  errHeating: boolean;
  errHeatingQC: boolean;
  errCentralAir: boolean;
  errElectrical: boolean;
  errFullBath: boolean;
  errHalfBath: boolean;
  errBedroomAbvGr: boolean;
  errKitchenAbvGr: boolean;
  errKitchenQual: boolean;
  errTotRmsAbvGrd: boolean;
  errFireplaces: boolean;
  errFireplaceQu: boolean;
  errGarageType: boolean;
  errGarageFinish: boolean;
  errGarageCars: boolean;
  errGarageCond: boolean;
  errPoolArea: boolean;
  errPoolQC: boolean;
  errFence: boolean;
  errMoSold: boolean;
  errYrSold: boolean;
  errSalePrice: boolean;
  errErrorMessage: boolean;
  errMessage: string;

  errAddress1: boolean;
  errAddress2: boolean;
  errCity: boolean;
  errState: boolean;
  errZipCode: boolean;
  errCountry: boolean;

  greenErrorMessage: boolean;
  greenMessage: string;

  validateInputFields: boolean;


  constructor(private _router: Router, private httpService: HttpService) {

    this.validateInputFields = true;

    this.model = new PredictHouseInfo('', 'Select BldgType', 'Select HouseStyle', '', '', '', '', '', '', 'Select KitchenQual', '', 'Select Heating', 'Select HeatingQC', 'Select CentralAir', 'Select Electrical', 'Select RoofStyle', 'Select ExterCond', 'Select Foundation', 'Select BsmtCond', '', 'Select PoolQC', '', 'Select FireplaceQu', 'Select GarageType', 'Select GarageFinish', '', 'Select GarageCond', 'Select Fence', '', '');

    this.addressModel = new AddressInfo('', ' ', '', '', '', '');
    this.predictOption = '';

    this.errPredictOption = false;
    this.errAddress1 = false;
    this.errAddress2 = false;
    this.errCity = false;
    this.errState = false;
    this.errZipCode = false;
    this.errCountry = false;

    this.errLotArea = false;
    this.errBldgType = false;
    this.errHouseStyle = false;
    this.errOverallCond = false;
    this.errYearBuilt = false;
    this.errRoofStyle = false;
    this.errExterCond = false;
    this.errFoundation = false;
    this.errBsmtCond = false;
    this.errHeating = false;
    this.errHeatingQC = false;
    this.errCentralAir = false;
    this.errElectrical = false;
    this.errFullBath = false;
    this.errHalfBath = false;
    this.errBedroomAbvGr = false;
    this.errKitchenAbvGr = false;
    this.errKitchenQual = false;
    this.errTotRmsAbvGrd = false;
    this.errFireplaces = false;
    this.errFireplaceQu = false;
    this.errGarageType = false;
    this.errGarageFinish = false;
    this.errGarageCars = false;
    this.errGarageCond = false;
    this.errPoolArea = false;
    this.errPoolQC = false;
    this.errFence = false;
    this.errMoSold = false;
    this.errYrSold = false;
    this.errSalePrice = false;
    this.errErrorMessage = false;
    this.errMessage = '';

    this.greenErrorMessage = false;
    this.greenMessage = '';

  }

  ngOnInit() {
    if (localStorage.getItem('dataEntered') == 'true'){
      this.greenErrorMessage = true;
      this.greenMessage = 'Data Successfully Entered!';

    }
    localStorage.setItem('dataEntered', 'false');

  }

  predict() {
    if (!this.validateInputs()) {
      this.errMessage = 'Please enter the fields correctly!';
      this.errErrorMessage = true;
      window.scrollTo(0 , 0);
      localStorage.setItem('dataEntered', 'false');
    } else {
      this.errErrorMessage = false;
      this.httpService.predict(this.predictOption, this.model).subscribe(
        (predictions) => {
          console.log('Predictions Result');
          console.log(predictions);
          localStorage.setItem('prediction_data', JSON.stringify(this.model));
          localStorage.setItem('predicted_value', JSON.stringify(predictions));
          localStorage.setItem('address', JSON.stringify(this.addressModel));
          localStorage.setItem('ml-model',this.predictOption);
          this._router.navigate(['/predictOutput']);
        });
    }
  }

  validateInputs(){
    this.validateInputFields = true;

    if (this.predictOption == ''){  this.errPredictOption = true; this.validateInputFields = false; }
    else { this.errPredictOption = false; }

    if (this.model.bldgType.search('Select') != -1){ this.errBldgType = true; this.validateInputFields = false; }
    else{ this.errBldgType = false; }
    if (this.model.houseStyle.search('Select') != -1){ this.errHouseStyle = true; this.validateInputFields = false; }
    else{ this.errHouseStyle = false; }
    if (this.model.kitchenQual.search('Select') != -1){ this.errKitchenQual = true; this.validateInputFields = false; }
    else{ this.errKitchenQual = false; }
    if (this.model.heating.search('Select') != -1){ this.errHeating = true; this.validateInputFields = false; }
    else{ this.errHeating = false; }
    if (this.model.heatingQC.search('Select') != -1){ this.errHeatingQC = true; this.validateInputFields = false; }
    else{ this.errHeatingQC = false; }
    if (this.model.centralAir.search('Select') != -1){ this.errCentralAir = true; this.validateInputFields = false; }
    else{ this.errCentralAir = false; }
    if (this.model.electrical.search('Select') != -1){ this.errElectrical = true; this.validateInputFields = false; }
    else{ this.errElectrical = false; }
    if (this.model.roofStyle.search('Select') != -1){ this.errRoofStyle = true; this.validateInputFields = false; }
    else{ this.errRoofStyle = false; }
    if (this.model.exterCond.search('Select') != -1){ this.errExterCond = true; this.validateInputFields = false; }
    else{ this.errExterCond = false; }
    if (this.model.foundation.search('Select') != -1){ this.errFoundation = true; this.validateInputFields = false; }
    else{ this.errFoundation = false; }
    if (this.model.bsmtCond.search('Select') != -1){ this.errBsmtCond = true; this.validateInputFields = false; }
    else{ this.errBsmtCond = false; }
    if (this.model.poolQC.search('Select') != -1){ this.errPoolQC = true; this.validateInputFields = false; }
    else{ this.errPoolQC = false; }
    if (this.model.fireplaceQu.search('Select') != -1){ this.errFireplaceQu = true; this.validateInputFields = false; }
    else{ this.errFireplaceQu = false; }
    if (this.model.garageType.search('Select') != -1){ this.errGarageType = true; this.validateInputFields = false; }
    else{ this.errGarageType = false; }
    if (this.model.garageFinish.search('Select') != -1){ this.errGarageFinish = true; this.validateInputFields = false; }
    else{ this.errGarageFinish = false; }
    if (this.model.garageCond.search('Select') != -1){ this.errGarageCond = true; this.validateInputFields = false; }
    else{ this.errGarageCond = false; }
    if (this.model.fence.search('Select') != -1){ this.errFence = true; this.validateInputFields = false; }
    else{ this.errFence = false; }
    if (this.model.lotArea == ''){  this.errLotArea = true; this.validateInputFields = false; }
    else{  if (Number.isNaN(Number(this.model.lotArea))){ this.errLotArea = true;  this.validateInputFields = false; }
      else{ this.errLotArea = false; }}

    if (this.model.overallCond == ''){  this.errOverallCond = true;  this.validateInputFields = false; }
    else{   if (Number.isNaN(Number(this.model.overallCond))){ this.errOverallCond = true; this.validateInputFields = false; }
      else{ this.errOverallCond = false; }}


    if (this.model.yearBuilt == ''){  this.errYearBuilt = true;  this.validateInputFields = false; }
    else{   if (Number.isNaN(Number(this.model.yearBuilt))){ this.errYearBuilt = true; this.validateInputFields = false; }
      else{ this.errYearBuilt = false; }}

    if (this.model.fullBath == '') {  this.errFullBath = true; this.validateInputFields = false; }
    else{  if (Number.isNaN(Number(this.model.fullBath))){ this.errFullBath = true; this.validateInputFields = false; }
      else{ this.errFullBath = false; }}

    if (this.model.halfBath == ''){  this.errHalfBath = true; this.validateInputFields = false; }
    else{   if (Number.isNaN(Number(this.model.halfBath))){ this.errHalfBath = true; this.validateInputFields = false; }
      else{ this.errHalfBath = false; }}

    if (this.model.bedroomAbvGr == ''){  this.errBedroomAbvGr = true; this.validateInputFields = false; }
    else{ if (Number.isNaN(Number(this.model.bedroomAbvGr))){ this.errBedroomAbvGr = true; this.validateInputFields = false; }
    else{ this.errBedroomAbvGr = false; }}
    if (this.model.kitchenAbvGr == ''){  this.errKitchenAbvGr = true; this.validateInputFields = false; } else { if (Number.isNaN(Number(this.model.kitchenAbvGr))){ this.errKitchenAbvGr = true; this.validateInputFields = false; } else { this.errKitchenAbvGr = false; }}
    if (this.model.totalRmsAbvGrd == ''){  this.errTotRmsAbvGrd = true; this.validateInputFields = false; } else {   if (Number.isNaN(Number(this.model.totalRmsAbvGrd))){ this.errTotRmsAbvGrd = true; this.validateInputFields = false; } else { this.errTotRmsAbvGrd = false; }}
    if (this.model.poolArea == ''){  this.errPoolArea = true; this.validateInputFields = false; } else { if (Number.isNaN(Number(this.model.poolArea))){ this.errPoolArea = true; this.validateInputFields = false; } else { this.errPoolArea = false; }}
    if (this.model.fireplaces == ''){  this.errFireplaces = true; this.validateInputFields = false; } else { if (Number.isNaN(Number(this.model.fireplaces))){ this.errFireplaces = true; this.validateInputFields = false; } else { this.errFireplaces = false; }}
    if (this.model.garageCars == ''){  this.errGarageCars = true; this.validateInputFields = false; } else { if (Number.isNaN(Number(this.model.garageCars))){ this.errGarageCars = true; this.validateInputFields = false; } else { this.errGarageCars = false; }}
    if (this.model.moSold == ''){  this.errMoSold = true;  this.validateInputFields = false; } else { if (Number.isNaN(Number(this.model.moSold))){ this.errMoSold = true; this.validateInputFields = false; } else { this.errMoSold = false; }}
    if (this.model.yrSold == ''){  this.errYrSold = true; this.validateInputFields = false; } else {  if (Number.isNaN(Number(this.model.yrSold))){ this.errYrSold = true; this.validateInputFields = false; } else { this.errYrSold = false; }}

    if (this.addressModel.address1 == ''){  this.errAddress1 = true; this.validateInputFields = false; } else { this.errAddress1 = false; }

    if (this.addressModel.city == ''){  this.errCity = true; this.validateInputFields = false; } else { this.errCity = false; }
    if (this.addressModel.state == ''){  this.errState = true; this.validateInputFields = false; } else { this.errState = false; }
    if (this.addressModel.zipcode == ''){  this.errZipCode = true; this.validateInputFields = false; } else {  if (Number.isNaN(Number(this.addressModel.zipcode))){ this.errZipCode = true; this.validateInputFields = false; } else { this.errZipCode = false; }}
    if (this.addressModel.country == ''){  this.errCountry = true; this.validateInputFields = false; } else { this.errCountry = false; }

    return this.validateInputFields

  }

}
