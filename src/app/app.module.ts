import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SimpleserviceService } from './simpleservice.service';
import {HttpClientModule} from '@angular/common/http';
import { SubChildComponent } from './sub-child/sub-child.component';
import { DisplayEmpComponent } from './display-emp/display-emp.component'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SubChildComponent,
    DisplayEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SimpleserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
