import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PredictHouseInfo } from './models/predict-house-info';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) {

  }



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json',
    })
  };

  createNewDataEntry(houseInfo, addressInfo) {
    const payload = JSON.stringify(houseInfo);
    const payload2 = JSON.stringify(addressInfo);
    return this.http.post(environment.NODE_HOST + '/newDataEntry', { house: payload, address: payload2 }, this.httpOptions);
  }

  getDataFromDatabase(id) {
    console.log(environment.NODE_HOST)
    return this.http.post(environment.NODE_HOST + '/getData', { num: id }, this.httpOptions);
  }

  getUniqueDataFromDatabase(id) {
    return this.http.post(environment.NODE_HOST + '/getUniqueData', { id: id }, this.httpOptions);
  }

  deleteDataFromDatabase(id) {
    return this.http.post(environment.NODE_HOST + '/deleteData', { id: id }, this.httpOptions);
  }

  updateDataEntry(id, houseInfo, addressInfo) {
    const payload = JSON.stringify(houseInfo);
    return this.http.post(environment.NODE_HOST + '/updateDataEntry', { id: id, data: houseInfo, addressInfo: addressInfo }, this.httpOptions);
  }

  predict(predictOption: string, houseInfo: PredictHouseInfo) {
    console.log(houseInfo);
    console.log(houseInfo['lotArea']);
    var payload = JSON.stringify(houseInfo);
    let api = '';
    if (predictOption.toLowerCase() === 'db2') {
        api = environment.GO_DB2_API;
      //  return this.http.get(environment.NODE_HOST + 'predict', payload, this.httpOptions);
    } else {
        return this.http.post(environment.NODE_HOST + 'WML_Predict', { values:  [Number(houseInfo['lotArea']), houseInfo['bldgType'], houseInfo['houseStyle'], Number(houseInfo['overallCond']), Number(houseInfo['yearBuilt']), houseInfo['roofStyle'], houseInfo['exterCond'], houseInfo['foundation'], houseInfo['bsmtCond'],
       houseInfo['heating'], houseInfo['heatingQC'], houseInfo['centralAir'], houseInfo['electrical'], Number(houseInfo['fullBath']), Number(houseInfo['halfBath']), Number(houseInfo['bedroomAbvGr']), Number(houseInfo['kitchenAbvGr']), houseInfo['kitchenQual'], Number(houseInfo['totalRmsAbvGrd']),  Number(houseInfo['fireplaces']), houseInfo['fireplaceQu'], houseInfo['garageType'],
       houseInfo['garageFinish'],  Number(houseInfo['garageCars']), houseInfo['garageCond'], Number(houseInfo['poolArea']), houseInfo['poolQC'], houseInfo['fence'], Number(houseInfo['moSold']), Number(houseInfo['yrSold'])] }, this.httpOptions);
    }

  }

  getCoordinates(address1, city, state, zipcode) {
    return this.http.post(environment.NODE_HOST + '/geocode', { address1: address1, city: city, state: state, zipcode: zipcode }, this.httpOptions);
  }

}
