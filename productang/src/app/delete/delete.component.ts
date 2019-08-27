import { Component, OnInit } from '@angular/core';
//import { Inject, Injectable } from '@angular/core';
//import {LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
val;
user;
name;
price;
cart=[];
//@Inject(LOCAL_STORAGE)private storage:WebStorageService
  constructor() { }

  ngOnInit() {
   
this.user=localStorage.getItem("username")
  }
    add(){
      localStorage.setItem("username",this.val)
    }
   
    
  
  
}
