import { Component ,Input,EventEmitter, Output, OnInit} from '@angular/core';
import {SimpleserviceService} from '../simpleservice.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
@Input() public parentData:any;
@Output() public childEvent = new EventEmitter();
 public arr!:any;
 title = 'angular-learn';
  public date = new Date();
  message="";
  outputVariable = "lathesh";
  isdiasabled:boolean=true;
  text_color="danger";
  isDanger =false;
  display=false;
  color="greenn";
  public name="";
  public arrayLang=["java","c","c++","c#","python","swift"]
  public styleObj={
   color:"blue",
   fontSize:"40px"
  }
constructor(private service:SimpleserviceService){}
ngOnInit(): void {
    this.service.getArray()
    .subscribe(data=>this.arr=data);
}
send(){
  this.childEvent.emit("Time is the soul");
}
}
