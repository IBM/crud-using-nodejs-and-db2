//@author Rohith Ravindranath
//@version July 10 2019
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService }  from '../http.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  data:any;

  showData:boolean;


  showUpdateDataMessage:boolean;

  showMessage:boolean;

  showDataDeletedMessage:boolean;

  numOfData:string;

  constructor(private _httpService:HttpService, private _router: Router) {
    this.data = [];
    this.showMessage  = true;
    this.showData = false;
    this.showUpdateDataMessage = false;
    this.numOfData = '10';
    this.showDataDeletedMessage = false;

  }

  ngOnInit() {
    this.aquireData();

    if (localStorage.getItem("dataDeleted") == "true"){
      this.showDataDeletedMessage = true;
      console.log(this.showDataDeletedMessage);
    }
    localStorage.setItem("dataDeleted","false");
  }

  aquireData(){
    this.showData = false;
    this.showMessage  = true;
    var dataObs = this._httpService.getDataFromDatabase(this.numOfData);
    dataObs.subscribe(data=>{
      if(data['success'] != 1){
        console.log(data['message']);
      }
      else{
        this.data = data['data'];

        if (localStorage.getItem("dataUpdated") == "true"){
          this.showUpdateDataMessage = true;
          localStorage.setItem("dataUpdated","false");
        }

        this.showData = true;
        this.showMessage  = false;
      }
    })
  }



  deleteData(row:any){
    console.log('Deleting Data...');
    var dataObs = this._httpService.deleteDataFromDatabase(row['ID']);
    dataObs.subscribe(data=>{
      if(data['success'] != 1){
        console.log(data['message']);
      }
      else{
        console.log('it works!')
        localStorage.setItem("dataDeleted","true");
        window.location.reload();
        window.scrollTo(0 , 0);
      }
    })
  }

}
