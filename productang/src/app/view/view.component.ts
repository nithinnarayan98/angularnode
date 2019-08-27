import { Component, OnInit } from '@angular/core';
import {SampleService} from '../sample.service'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
view:boolean=false
    result;
  constructor(private ss:SampleService) { }


  public show(){
    this.ss.getdata().subscribe(data=>{
      this.result=data;
    })
  }
  public edit(p){
this.view=true;
console.log(p)

  }

  ngOnInit() {
  }

}
