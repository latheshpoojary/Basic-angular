import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-emp',
  templateUrl: './display-emp.component.html',
  styleUrls: ['./display-emp.component.scss']
})
export class DisplayEmpComponent implements OnInit{
public parentmessage: any;
  constructor(private route:ActivatedRoute){}
ngOnInit(): void {
     let  message = this.route.snapshot.paramMap.get("receiveValue");
    
     
     this.parentmessage=message;
     
     
}

}
