# Angular Topic Explanation

## 1. Property Binding
  - ### {{ }}  only bind the string not for other datatype like boolean
  #### example:
```  
 <input diasabled="{{true}}">
```
        
it won't work.
  - ### [ ] can be used for any type of datatype.
  #### example:
        <input [disabled]="true"> it work correctly.
  - ### you can use **bind-** keyword also
 #### example:
        <input bind-disable="true"> 

## 2. Class Binding
- ### [class]="name of the class" ,class name should be defined in the typescript file.
        <h1 [class]="danger">Hello world</h1>
     here **danger** is the class name defined inside the typescript.
  ### applying condition to the class:
        <h1 [class.sucess]="hasError">Hello world</h1>
     here **sucess** is the class name inside style tag not class name but **hasError** is the class name.
## 3.Style Binding
   #### syntax
      <h1 [style.color]="'red'"></h1>
   here while mentioning property use **' '** inside **" "**.
 - ####  we can use condition inside the style by using class binding.
 
 #### syntax
      <h2 [style.color]="isDanger?'orange':'red'">Hello world</h2>
here **isDanger** is the classname and we can use **ternary** operator.

 - #### Using classObject as a style to the tag.
      first define the **classObject**

            public styleObj={
            color:"blue",
            fontSize:"40px"
            }

      second use this **classObject** into the tag.

            <h2 [ngStyle]="styleObj">Hello world</h2>
      Now both **color** and **fontSize** is applicable for the **h2** element.
      <br>
      >Note:use **[ngStyle]** for the binding of class.
 ### 4.Event Binding
>Note:event can be represented by ( ) bracket.
```
<button (click)="display()" >Submit</button>
```
you can see **click** is within the ( ).here click is a event.

- we can also use **$event** for the event listener.
```
<button (click)="display($event)" >Submit</button>

//function
display(event){
      console.log(event)//it display all the event happened into that element.like type:click.
}
```
- you can also assign value to the variable there itself.
```
<button (click)="greeting="welcome lathesh" " >Submit</button>
{{greeting}}//display welcome lathesh
```
>here declaring greeting is important in the **ts** file.

### 5.Template refernce Variable
- we can define template reference variable by using **#** symbol.
- It is used to refer the html element .
```
<input #myVar type="text">
<button (click)="display(myVar.value)">Submit</button>

//function
display(value){
      console.log(value);//it display input value entered inside input tag.
}

```

### 6.Two Way Binding
- it is basically doing both **event** and **class** binding together.
- first event binding using **( )** symbol here the value send from html element to the component class .
- second the stored value is again displayed using class binding **[ ]**.
- here **ngModel** is used to bind values.
- to use **ngModel** we have to import **FormModule** module inside **app.module**.
```
<input type="text" [(ngModule)]="name">
{{name}}

//class component
name="";
```
>Note: here class name should be same in both html and class component.

### 7.ngIf directive
- we can use this to remove or add the element.
```
<h1 *ngIf="display">Hello</h1>


//class component
public display=false;
```
- use can also use ==else== here,to use ==else== you should make use of **else** keyword. 
>Note:The block in else is should be inside the ng-template tag.
```
<h1 *ngIf="display; else elseBlock">Hello there</h1>
<ng-template #elseBlock>
    <h1>Else block</h1>
</ng-template>

```
**#** is template reference;it refer the template block with name *#elseBlock*.if you do with only h1 tag which is not inside the ng-template then you can met an error.

- other way to do this,
```
<div *ngIf="display; then thenBlock; else elseBlock"></div>
<ng-template #thenBlock>
    <h1 >Then Block</h1>
</ng-template>
<ng-template #elseBlock>
    <h1>Then Block</h1>
</ng-template>

```

### 8.ngSwitch directive
- use **[ngSwitch]="choice variable"**.
- then use ***ngSwitchCase="choice"**.
- if nothing is compare then default case will be executed by using **ngSwitchefault**
```
<div [ngSwitch]="color">
    <p *ngSwitchCase="'red'">Red</p>
    <p *ngSwitchCase="'green'">Green</p>
    <p *ngSwitchCase="'blue'">Blue</p>
    <p *ngSwitchDefault>choice color man</p>
</div>
```

### 9.ngFor directive
- it is used for an **array** element.
- it act like a for loop as in other languege.
#### syntax
```
<element *ngFor="let variableName of arrayName;index as secondVariable;odd as thirdVariableName;even as forthVariableName;last as fifthVariable;first as sixthVariable">
```
>Note: here index as,odd,even,first,last all are optional.we can find the index of the element by index of ,we can find the first an last,even an odd position element.it will return true or false.

```
<div *ngFor="let lang of arrayLang;index as i;odd as o;first as f;last as l;">
    <li>{{i}} | {{lang}} |  {{o}} | {{f}} | {{l}}</li>
</div>
```
![Alt text](image.png)



### 10. Component Interaction
- It is used dto send the ata from child to parent and vise versa.
- to send data from the parent to child we have to use **classBinding**.
- we can send the value from  parent to the child with child tag.
#### syntax
```
<app-child [parentData]="outputVariable" ></app-child>


//class component
outputVariable="lathesh";
```
Now **lathesh** sen to the child component with the name as parentata.
- #### Recieving value from parent.
1.import input form core module.
2.use @input decorator.
```
@Input() public parentData:any;
```
>Note:the name passed by the parent an the recieve by child should be same.
Here **parentData** is same as parent send data.

3.use this variable to display or some operation on that data.
```
<p>child {{parentData}}</p>//it display child lathesh
```
- #### sending data from child to parent.
1.import output and eventEmitter from core module.
2.use @output and create new object of EventEmmiter.
```
@Output() public childEvent = new EventEmitter();
```
3.Now send the data from child to parent by calling function when click event triggered.
```
<button (click)="send()">Submit</button>


//class component
send(){
  this.childEvent.emit("Time is the soul");
}
```
>here **emit** method of the eventEmmiter is used for sending value from child to parent.
4.receive the value send from the child in parent.
```
<app-child (childEvent)="message=$event" [parentData]="outputVariable" ></app-child>
```
> - here **(childEvent)**  is the object of eventEmitter which is created inside the child.
>- **message** is the variable should be created inside the parent.
>- $event is the keyword used to get the data.
5.display the value now.
```
<h1>{{message}}</h1>
```


### 11.pipes
- used for change the style of the text.
- it can only be applicable for the value inside the {{}} not applicable for normal text.
- #### for String
> - lowercase
> - uppercase
> - titlecase
> - slice:start:end(end excluded)
```
<h1>{{message | lowercase}}</h1>
<h1>{{message | uppercase}}</h1>
<h1>{{message | titlecase}}</h1>
<h1>{{message | slice:3:5}}</h1>
```
- #### for object
> - json
```
<h1>{{person | json}}</h1>



//class component
public person={
      name:"lathesh",
      age:22
}
```

- #### for number
> - number:number of digit.decimal range
> - percent
> - currancy
```
<h1>{{2.345  | number:2.2-3}}</h1> //02.345
<h1>{{2.345  | number:1.2-6}}</h1> //2.345000
<h1>{{2.345  | number:1.1-2}}</h1> //2.35
<h1>{{0.25  | percent}}</h1> //25%
<h1>{{2345  | currancy}}</h1> //$2345
<h1>{{2345  | currancy:'GBP}}</h1> //₤2345
<h1>{{2345  | currancy:'GBP':'code'}}</h1> //GBP2345



```
- #### for date
> - date:short
> - date:medium
> - date:long
```
<h1>{{date | date:'short'}}</h1>//3/7/2023 3.26PM
<h1>{{date | date:'shortDate'}}</h1>//3/7/2023 
<h1>{{date | date:'shortTime'}}</h1>//3.25PM 





//class component
public date = new Date();
```

 ### 12.Service
- service is used for, 
>- share data among component
>- logic part
>- database transformation
>- dependency injection

#### creating service files
```
npx ng g s service-name
```
#### importing service inside the app.module.ts
```
import {service name} from 'location of the service';
providers:[serviceName]//this one important
```
#### build logic inside service.
```
 getArray(){
    return [
      {name:"lathesh",age:21,experience:2},
      {name:"swasthik",age:21,experience:3},
      {name:"adarsh",age:22,experience:2},
      {name:"Ranju",age:20,experience:1} ,
      {name:"suneel",age:23,experience:2}

    ]
  }
```
#### include service inside the component.
- import service inside the component.
- register service inside the component.
- access the service inside component
```
1. import {SimpleserviceService} from '../simpleservice.service';
2. constructor(private service:SimpleserviceService){}
3. this.arr=this.service.getArray();
```

### 13.Http and observable
- http is use to send and receive request and response from the api or webserver or database.
> 1. service send the request to the http.
> 2. http send the request to the api,webservice or database.
> 3. api,webservice or database send the response back to the http.
> 4. the http send the response as a observable type to the service.
> Note:observable is a asynchronous type of response.
> 5. here observable is the http response.
> 6. service page responsible for formating these response.
> 7. the component which is injected this service is to subscribe to this response to get the access of the data.

- RxJs is use for working with observable.

#### step to implement
1. import the ==httpClientModule== inside the **app.module.ts**.
2. add it into the **import statement** inside the app.module.ts
```
import {HttpClientModule} from '@angular/common/http';
 imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule      <<<---------
  ],
```

3. import the **httpClient** inside the **service**.
4. add **dependency** inside the **constructor**.
5. call the get method of http which accept url parameter. to get url you are simply create one ==json file within data folder which is inside the assets folder==.
6. add the **array of object** inside the json file.
7. get request send the ==observable type of response=== so to convert the observable we have to create one typescript file with interface.
8. create one ts file which contains the interface of format same as json an export it.
9. add interface type to the response of the get method and observable type.
```
import {HttpClient} from '@angular/common/http'
import { empData } from './employee';
import { Observable } from 'rxjs';

export class SimpleserviceService {
  public url:string="/assets/data/emp.json"; //json file path
  constructor(private http:HttpClient) { }  //depenency injection
  getArray():Observable<empData[]>{        // making empData of type.
    return this.http.get<empData[]>(this.url); //converting response to empdata type.
  }
}


//emp.json

[
      {"name":"lathesh","age":21,"experience":2},
      {"name":"swasthik","age":21,"experience":3},
      {"name":"adarsh","age":22,"experience":2},
      {"name":"Ranju","age":20,"experience":1},
      {"name":"suneel","age":23,"experience":2},
      {"name":"vishal","age":25,"experience":4}


    ]


//employee.ts

export interface empData{
    name:string,
    age:number,
    experience:number
}
```

10. after getting response to use the data of it we should ==subscribe== it. which has to be done in component class.
```
this.service.getArray()
.subscribe(data=>this.arr=data); //it get all the value from the json file.
```


### 14.Routing and navigation

1. routerLink also used to navigate from one page to another.
2. routerLinkActive is used to highlight the clicked button.


### 15. Wilcard and redirect route
1. routing are specifie using array of object.
2. there are two main argument which are **path** and **component**.
3. path is used to show the url path.
4. component is used to navigate towhich component when the path is set.
```
 {path:'**',component:'errorcomponent'} //it match all the url.

```
>Note:should not use path:** at the start because the control start from the beginning of the route array. so ** matches all the url hence it display that page again an again no matter what the url is.
therefor mention at the end.

5. for empty url we can use ==path:' ',redirectTo:'/employee',pathMatch:'full';==
> 1. it check whether the url is empty if it is then it redirect the path to employee url.
> 2. patchMatch is used to match the path fully means it check the url whether it is empty or not then only redirect the url.
> 3. there are two values for the pathMatch that is prefix and full.

```
const routes: Routes = [
  {path:'',redirectTo:'sub',pathMatch:'full'},
  {path:'child',component:ChildComponent},
  {path:'sub',component:SubChildComponent},
  {path:'display',component:DisplayEmpComponent},
  {path:'**',component:SubChildComponent}
];
```

### 16. Route Parameters
- here we are passing value from paarent to child component.
- to pass value from parent to child we need router module.

#### sending message from parent.
1. import the **router Module**.
2. In parent component import router and use **navigate function** of router.
3. pass the parameter inside the navigate function.
```
import { Router } from '@angular/router';
constructor(private route:Router){}
sendMe(){
    this.route.navigate(["display","hello"]);
  }
```
>first parameter for the navigate function always path of child and secon one is values.
4. include the parameter inside the url by using **routing.ts**.
```
{path:'display/:message',component:DisplayEmpComponent}
```
>here message is embeded with message parameter what we send in parent component.
#### receiving parameter inside child.
1. import **ActivatedRoute** inside the receiving component.
2. add dependency inside the constructor.
3. access the passed value by using the snapshot stored inside the router.
```
import { ActivatedRoute } from '@angular/router';
public parentmessage: any;
 constructor(private route:ActivatedRoute){}
 ngOnInit(): void {
     let  message = this.route.snapshot.paramMap.get("message");
    
     
     this.parentmessage=message;
     
     
}
```
> here **message** which is inside the **get method** should be same as what we passed inside the router url.
4. display the value inside the html.
