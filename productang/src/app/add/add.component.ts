import { Component, OnInit } from '@angular/core';
import {SampleService} from '../sample.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
result;
id;
name;
price;
  constructor(private hc:SampleService,private rt:Router) { }

  public new(){
    this.hc.adddata(this.id,this.name,this.price).subscribe(data=>{
this.result=data;
this.rt.navigateByUrl("/view")
console.log(this.result)
    })
  }

  ngOnInit() {
  }

}
