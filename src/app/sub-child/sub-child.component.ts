import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.scss']
})
export class SubChildComponent implements OnInit{
  constructor(private route:Router){}
  ngOnInit(): void {
      

  }
  sendMe(){
    this.route.navigate(["display","hello"]);
  }

}
