import { Component } from '@angular/core';
import {NgModel} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles:[`
    .danger{
      color:red;
    }
  `]
})
export class AppComponent {
  title = 'angular-learn';
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
 
}
