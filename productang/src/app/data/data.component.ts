import { Component, OnInit } from '@angular/core';
import {CalcService} from '../calc.service';
import {SampleService} from '../sample.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
val;
n1;
n2;
message;
wmsg;
  constructor(private ds:CalcService,private ss:SampleService) { }
  public sum(){
    this.val=this.ds.add(parseInt(this.n1),parseInt(this.n2));
  }
  public sub(){
    this.val=this.ds.diff(parseInt(this.n1),parseInt(this.n2));
  }
  public msg(){
    this.ss.getdata().subscribe(data=>{
      this.wmsg=data;
      console.log(this.wmsg)
    })
  }

  

  ngOnInit() {
    
  }

}
