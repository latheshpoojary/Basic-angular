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
constructor(private service:SimpleserviceService){}
ngOnInit(): void {
    this.arr=this.service.getArray();
}
send(){
  this.childEvent.emit("Time is the soul");
}
}
