# Angular-Basic-2.0

Angular is a full featured Javascript framework created and maintained by google and is used for building front-end part of a full stack application. Angular is very popular in large enterprise.

AngularJS was released on 2010. It is not recommanded and should be updated to angular.

Angular refers to version 2+. Right now we are using version 7 but 2-7 is the same frame work with few changes mostly under the hood.

# Why use Angular?
Organized front-end structure(Component, Model, Services)
Extremely powerful & full featured.
All-in-one solution (Routing, HTTP, RXJS etc).
Build powerful SPA (Single Page Application) apps.
MVC- model, view, controller design pattern.
Type Script.
Fantastic CLI.

# Why you should know before learning angular?
Java Script Fundamentals (Objects, arrays, conditions etc)

# It may help to learn these first

Typescript

Classes

Hign Order Array Methods- forEach, map, filter.

Arrow Functions

Promises & Observables

MVC Pattern

# Uses

Uses TypeScript for static types (variables, functions, params)

Component based (like other frameworks)

Uses "services" to share data/fucntionality between components

Concept of modules (root module, form modules, http module etc)

Uses RxJS "observables" for async operations

Steep learning curve relative to other frameworks.

# Angular CLI

$ ng new myapp ----------- create a new application

$ ng serve / npm start ----------- run the dev server

$ ng build ----------- will build out our asset

$ ng build --prod ----------- will build for production. All files will be in the "dist" folder

$ ng generate component components/todos ---- to generate component

$ ng g c department -it -is --- to generate component with inline template and inline style

$ ng g c components/todos ---- to generate component

$ ng generate service services/todos ---- to generate service

$ ng g s services/todos ---- to generate service

$ ng generate module app-routing ---- to generate module

We can use state management like ngrx and redux with Angular for large apps

# Installation Process

Install the nodeJS -- sudo apt install nodejs

Version check of nodeJS npm --version

Install the Angular CLI -- sudo npm install -g @angular/cli

Angular version check ng --version

# Project
After creating a project we have to open the project on the visual studio. Then we will find the following files--

Package.json -- It has all the dependencies and packages. (All the libraries will be available here. It also have scripts to run and build the server.)

Src -- This folder contains the main page. And that one is Index.html. This is the main page that load on the browser this is the tag the root app component.

Angular.json -- In this file we have to provide all the styles, scripts, assets. We can import bootstrap or anything on this file. (We can do the same on the Index.html)

App -- This folder inside the src folder. This folder contains all the component, services.

main.ts -- This is the entry point of the Angular application.

App.Module.ts -- This is the meeting place for all the components. If we have to add a new component then we have to add on this file on the declarations. If we have to add a module then we have to add on the module. Provider will add all the services. Bootstrap will do the main app component. All the component will be type script file. And it will be .ts .

app.component.ts -- It has the selector which is the Html element. It also has the template url for the html and stylesheet for the style sheet. We can add all the component over here.

# Life Cycle- 

When we run the ng serve in the terminal the execution come on main.ts file. Over here app-module has been kicked start. In the app-module it again kick start the app-component. The app-component has HTML template and class to controll hte view logic. HTML file for view and Typescript  file and class App-Component to controll the view logic. 

# Update Angular Project

https://update.angular.io/

# Angular Details -

## Module- 
Each angular application should have one module. Which is called Root Module. By convention this is called AppModule.
All other components will be nested on Root Component. Each module contain Components and Services. 

## Component-
Each componenet has HTML template and class.

HTML- HTML template to represent a view on the browser. 

Class- Class controlles the logic of that particular view.

## Services- 
Business logic. Module also have services that is basically classes that contains the business logic of the application.
To Solve the following to principle issue we need to use the services-
         1) Do not repeat.
         2) Single repository principle.
         
Service is nothing but a class with a specific perpose. Why do we need services?

         1) Share Data -> Service will provide data to the multiple component.
         2) Implement application logic -> We can write the business logic in the service.
         3) External Interaction -> We can use services to connect external like databse.
         
Naming convertion -> filename.service.ts
               ie -> employee.service.ts
               
### Dependency Injection
To use service in Angular we have to use the Dependency Injection.
DI as a framework -
         1) Define the employeeService class
         2) Registor the injector
         3) Declare as dependency in EmployeeList and EmployeeDetails
         
### @Injectable
This decorator tells Angular this service might itself the injectable dependency. If we want to inject a service to another service @injectable decorator must.

### HTTP, Ovservables and RXJS

         1) Observables- A sequence of items that arrive asynchronously over time.
         
         HTTP call -> Single Item -> HTTP Response
         
         2) RXJS - Reactive extentions for javascript. External library to work with observables.
         
         3) Example -
                 a) HTTP get request from EmployeeService.
                 b) Receive the observable and cast it into an employee array.
                 c) Subcribe to the observable from employeeList and EmployeeDetails
                 d) Assign the comployee array to the local variable.
         
# Architecture Summary
Angular App- One or More module.

Module- One or more component and services

Component- HTML + Class

Services- Business Logic

Modules interact and ultimately render the view in the browser.


# app.component.ts

## There are 3 ways to specify the selector on component

1) selector: 'app-test'   ->   `<app-test></app-test>`

2) selector: '.app-test'  ->   `<div class="app-test"></div>`

3) selector: ['app-test']  ->   `<div app-test></div>` 

## HTML and CSS can be seperate file or inline in the TypeScript file

1) Seperate File- HTML & CSS

         templateUrl: './app.component.html',
         styleUrls: ['./app.component.css']

2) Inline in the TypeScript file
  
         template: `<div>
                           Inline Template
                  </div>`,
         styles: [`div{
                  color:red;`]
               

# Interpolation

Defining a property by using the double courly brases is called Interpolation.
Exp-- {{name}}

1) Binding a data from class to tamplate is called Interpolation- Welcome {{name}}
2) Expression  - `<h1>{{2+2}}</h1>`
3) String Concatenation - `<h1>{{"Welcome" + name}}</h1>`
4) Java Script property and methiod on the Curly Braces -
         a) `<h1>{{name.length}}</h1>`
         b) `<h1>{{name.toUpperCase}}</h1>`
         c) `<h1>{{methidName()}}</h1>`
 
 Note: We cannot assignment and access the global javascript variable with Interpolation.
 
 # Attribute vs Property
 
 1) Attributes and property are not same.
 2) Attributes - HTML
 3) Properties- DOM (Document Object Model)
 4) Attributes- Initialize Dom properties and they are done. Attribute value cannot change once they are initialized.
 5) Property value however can change
 
 Note: Interpolation only works in String. For boolean property we need to user property bindings.
 
 `<input [disabled]="isDisabled" id={{myId}} type="text" value="Nick">`
 
 # Class Binding
 
 Class binding is useful because it allows to dynamically add or remove classes to HTML elements base on some user interaction or state on your application. You can change the classes been applied ny changing the property on our component class.
 
 `[ngClass]="className"`
 
 # Style binding
 
 `[ngStyle]="styleName"`
 
 # Event Binding
 
 `<button (click)=onClick()>Create</button>`
 
 `onClick(){`
 `.......`
 `concolse.log("ABC");`
 `}`
 
# Template Reference Variable

`<input #myInput type="text">`

`<button (click)="logMessage(myInput)">Log</button>`

`Here- myInput is the Reference Variable`

# Two Way Binding

Banana is a box is use to say two way binding. Update the property and the same time display the property.

`{input [(ngModel)]="VarName" type="text">`

`{{VarName}}`

Note : For two way binding we need to import the FormsModule on the app.module.ts file.

# Structure Directives

Add or remove HTML elements

1) ngIf -> Similar like if statement. Only difference is render HTML instead of any logic.

2) ngSwitch -> Similar like switch statement. Only difference is render HTML instead of any logic.

3) ngFor -> Similar like For statement List. Render HTML list elements.

# Component Interaction 

Component sometimes need to communicate with each other. Parent component might need send data to child component. Child component aslso send data to parent component. Using `@input()` decorator child can accept input form parents. And using the output decorator `@output()` child could send out even the parents to indicate something.

Note: Sending data from parent component to child component is easy. Because parent component has the child component selector. On the other hand child component does not has the parent component selector. So, easiest way to send data is event.

# Pipes

Pipes allow us to transform data before display them in the view.

Builtin Pipes String Property -> lowerCase, upperCase, titleCase, slice, json.

Builtin Number Pipes -> number, currency, percent.

Builtin Date pipes -> date, short. 

Pipe is only applicable on the view. It does not change the value of the class.

# Routing in Angular
## Add the routing option on the existing project -->

1) Go To Index.html file on the project and add the base ref to  <base href="/">

2) In the app folder, create a new file app-routing.module.ts

3) Import App Routing Module in the AppRouting Module

## Wildcard Route and Redirecting Routes:

By using the wildcard route we can configure the 404 not found error if the user use any not configure URL keep (**)   wildcard route on bottom of all route.

Default Routing ->
{Path: component: DepartmentListComponent}

### For Redirecting Route ->

{Path: '', redirectTo:'/departments', pathmatch: full}
3 parameter need to provide for the redirecting route

path -> Redirect to and pathmatch
path -> any
Redirectto-> any 
PathMatch -> Prefix and full


## ParamMap Observable

Angular has to decide it has to initialize new componentor it will reuse the same component. When we navigate back to the component Angular only reuse the component. No initialization implies on ngOninit() method. That does not get call. Hence new id newer be retrive from URL. This is the drawback of the 'SNAPSHOT'.

To overcome this we have to use "paramMap Ovservable".

## Relative navigation

For absolute path we use "/". 

this.router.navigate(['/departments', department.id]); --> This is for Absolute Path

this.router.navigate([department.id], {relativeTo:this.route}); --> This is for Relative Path

## Dynamic Imports for Laze Routes

Load the code for the routes only when the user navigates to those routes for the first time.

{path:'/user', loadChildren:'./user/user.module #UserModule'}

{path:'/user', loadChildren:()=> omport (:/user/user.module).then(m=>m.UserModule)}

# Angular Forms

Forms are the vital to business application. Create an experience that guides the user efficiently and effectively through the work flow --

## Developers--
         1) Data Binding
         2) Change Tracking
         3) Validation
         4) Visual Feedback
         5) Error Message
         6) Form Submission

## Angular provide two approaches
         1) Template Driven Forms- Heavy on the component template         
         2) Reactive Forms - Heavy on the component class
         
### Template Driven Forms (TDF)
         1) Easy to use and similar to Angular JS Forms
         2) Two way data binding and ngModel
         3) Bulky HTML and minimal component code
         4) Automatically tracks the form and form elements state and validity.
         5) Unit testing is a challenge.
         6) Read ability decreases with complex forms and validations.
         7) Suitable for simple scenarios.
         
### TDF Steps
         1) Generate a new CLI project
         2) Add the form HTML
         3) Binding data.
         4) Tracking state and validity
         5) Providing visual feedback
         6) Displaying error messages
         7) Posting data to a server

### Angular Form / Binding data with ngForm

We can easily retrive different ngForm control values by using ngForm and ngModel directives. Data binding has 3 directive in TDF --
         1) ngForm.
         2) ngModel.
         3) ngModelGroup.

We can bind data using the ngModel directive and we can send this data to the server which require userForm.value.

### Binding Data to a Model

Binding the user model to a form is really simple. We bind properties of Model by ngModel directive. And for property binding we make use of square brackets.
         
         `[ngModel]="userModel.name"`

Property Data Binding is one way binding. Which data flows from class to view. But it does not flow to form view to class.
When we work on a Form we need two way binding. Two way binding is Bananain Box Syntax in ngModel directive.


 ### Tracking State and Validity
 
 <table>
   <tr>
      <td>
         State
      </td>      
      <td>
         Class if true
      </td>            
      <td>
         Class if flase
      </td>
   </tr>    
   <tr>
      <td>
         This control has been visited
      </td>      
      <td>
         ng-touched
      </td>      
      <td>
         ng-untouched
      </td>
   </tr>         
   <tr>
      <td>
         This control's value has changed
      </td>      
      <td>
         ng-dirty
      </td>      
      <td>
         ng-pristine
      </td>
   </tr>   
   <tr>
      <td>
         This control's value is valid
      </td>      
      <td>
         ng-valid
      </td>      
      <td>
         ng-invalid
      </td>
   </tr>
<table>

### For each of this classes Angular provide the ngModel properties

<table>
   <tr>
      <td>
         Class
      </td>      
      <td>
         Property
      </td>                 
   </tr>   
   <tr>
      <td>
        ng-untouched
      </td>      
      <td>
         untouched
      </td>                 
   </tr>
   <tr>
      <td>
        ng-touched
      </td>      
      <td>
         touched
      </td>                 
   </tr>    
   <tr>
      <td>
        ng-pristine
      </td>      
      <td>
         pristine
      </td>                 
   </tr> 
   <tr>
      <td>
        ng-dirty
      </td>      
      <td>
         dirty
      </td>                 
   </tr>
   <tr>
      <td>
        ng-valid
      </td>      
      <td>
         valid
      </td>                 
   </tr> 
     <tr>
      <td>
        ng-invalid
      </td>      
      <td>
         invalid
      </td>                 
   </tr> 
     
  </table>

### Get access the ngModel property

By creating the ngModel directive 2 ways can effecct the visual way for validation. We can use our own validation class or we can use classes that our framework CSS can provide.

Bootstrap 4 also provide class for invalid.

`<input type="text" required #name="ngModel" [class.is-invalid]="name.invalid && name.touched" class="form-control" name="userName" [(ngModel)]="userModel.name">`

### Error Message

1) For the single validation rules create an element that contains error message. Conditially show  the message base on the state. And apply show the message base ont the state. And apply the appropriate style on the error message.

2) For multiple validation rule create a block that gets render only if the error object is defined and the filed is invalid or visited. With in the block create a seperate error messages base on the validation that is been applied.

### Form Validation

Form validationcan can be used to disable the submit button. Form level validation will apply to all the controls of the forms.

### Submitting form Data

novalidate- This will prevent the browser validation from kicking in when we click on the submit button.

ngSubmit- This get emitted when submit button escalate.

### Express Server to receive FormData

Set up the basic Express Server

         1) Initialize new package json file -> npm init --yes         
         2) Install the dependency -> npm install --save express body-parser cors
                  a) Express - Webserver
                  b) bosy-parser - Middlewire handle form data
                  c) cors- is a package to make request
         3) Run the Node Server -> Node Server

### Reactive Form Type
         
         1) Form Group
         2) Form Control
         
### Reactive Form Advantage
         
         1) Code and logic resides in the component class
         2) No two way binding
         3) Well suited for complex scenarios
         4) Dynamic form fields
         5) Custom validation
         6) Dynamic Validation
         7) Unit Testing
 
 ### Steps need to performs for Reactive Form
         
         1) CLI generated project
         2) Add the form HTML
         3) Create the form model
         4) Manage the form control values
         5) Form Builder service
         6) Validation- Simple, Custom, cross-field and Dynamic
         7) Dynamic form controls
         8) Submitting form Data
         
   Note: In the HTML there is no difference between Template Driven Form and Reactive Form. HTML always in the component              template.      
   
  
  ### FormGroup and FormControl
  
                  |------------------------------------------------------------|              
                  |              UserName - > FormControl                      |          
                  |                                                            |  
     FormGroup    |              Password - > FormControl                      |  
                  |                                                            |  
                  |              Confirm Password - > FormControl              |  
                  |                                                            |  
                  |------------------------------------------------------------|             
  
                                       Registration Form                     
   
  ### Three steps to create reactive form in Angular
         
         1) Define the HTML form in component template.
         2) Define the Form Model in the Component class
         3) Use the directive provided by the "Reactive- Forms" module to associate model to the view.
      
      And FormGroup.value will provide the value that will be posted on the server.
         
  ### Managing Control Values
         
         1) SetValue- is very strict for maintaining the structure of the from group. We have to pass all the form control values. 
         2) PatchValue- is not strict for maintaining the structure of the form group. We can use it to pass few of the form control values. 
         3) FormBuilder- This is a service. Which will fullfill the purpose of FormGroup and FormControl.         
         4) Reactive Form Validation- In the reactive Form Validation rules are specified on the component class instead of template.
         
  ### Reactive Form Validation Steps
  
         1) Apply the validation rule to the FormControl.
         2) Provide the visual feedback for the validation.
         3) Display the appropriate error message for the validation.
