import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private hc:HttpClient) { }
  public getdata(){
    let url="http://localhost:8000/view";
    return this.hc.get(url);
  }
  public adddata(x,y,z){
    let url="http://localhost:8000/add";
    return this.hc.post(url,{id:x,name:y,price:z});
  }
  
}
