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
- first event binding using ==( )== symbol here the value send from html element to the component class .
- second the stored value is again displayed using class binding ==[ ]==.
- here ==ngModel== is used to bind values.
- to use ==ngModel== we have to import ==FormModule== module inside **app.module**.
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
```
<div [ngSwitch]="color">
    <p *ngSwitchCase="'red'">Red</p>
    <p *ngSwitchCase="'green'">Green</p>
    <p *ngSwitchCase="'blue'">Blue</p>
    <p *ngSwitchDefault>choice color man</p>
</div>
```
