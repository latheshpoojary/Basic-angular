import { Component ,Input,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() public parentData:any;
@Output() public childEvent = new EventEmitter();
send(){
  this.childEvent.emit("Time is the soul");
}
}
