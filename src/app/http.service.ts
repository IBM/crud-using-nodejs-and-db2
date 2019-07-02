import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  GO_HOST_NAME = 'http://localhost:8080/'
  NODE_HOST_NAME = 'http://localhost:8888/'

  constructor(private _http: HttpClient) {

  }

  httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
            })
  };

  createNewDataEntry(houseInfo,addressInfo){
    const payload = JSON.stringify(houseInfo);
    const payload2 = JSON.stringify(addressInfo);
    return this._http.post(this.NODE_HOST_NAME + 'newDataEntry', {house:payload,address:payload2}, this.httpOptions);
  }

  getDataFromDatabase(number){
    return this._http.post(this.NODE_HOST_NAME + 'getData', {num:number},this.httpOptions);
  }

  getUniqueDataFromDatabase(id){
    return this._http.post(this.NODE_HOST_NAME + 'getUniqueData', {id:id}, this.httpOptions);
  }

  deleteDataFromDatabase(id){
    return this._http.post(this.NODE_HOST_NAME + 'deleteData',{id:id} ,this.httpOptions);
  }

  updateDataEntry(id,houseInfo,addressInfo){
    const payload = JSON.stringify(houseInfo);
    console.log(payload);
    return this._http.post(this.NODE_HOST_NAME + 'updateDataEntry',{id:id,data:houseInfo,addressInfo:addressInfo} ,this.httpOptions);
  }

  predict(houseInfo){
    const payload = JSON.stringify(houseInfo);
    console.log(payload);
    return this._http.get(this.NODE_HOST_NAME + 'predict');
  }

  getCoordinates(address1, city, state, zipcode){
    return this._http.post(this.NODE_HOST_NAME + 'geocode',{address1:address1,city:city, state:state, zipcode:zipcode},this.httpOptions);
  }

}
