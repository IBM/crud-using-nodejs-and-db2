//@author Rohith Ravindranath
//@version July 10 2019
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute }  from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

}
