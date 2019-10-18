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

# Angular Details -

# Module- 
Each angular application should have one module. Which is called Root Module. By convention this is called AppModule.
All other components will be nested on Root Component. Each module contain Components and Services. 

# Component-
Each componenet has HTML template and class.

HTML- HTML template to represent a view on the browser. 

Class- Class controlles the logic of that particular view.

# Services- 
Business logic. Module also have services that is basically classes that contains the business logic of the application.

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

# Add the routing option on the existing project -->

1) Go To Index.html file on the project and add the base ref to  <base href="/">

2) In the app folder, create a new file app-routing.module.ts

3) Import App Routing Module in the AppRouting Module

# Wildcard Route and Redirecting Routes:

By using the wildcard route we can configure the 404 not found error if the user use any not configure URL keep (**)   wildcard route on bottom of all route.

Default Routing ->
{Path: component: DepartmentListComponent}

For Redirecting Route ->

{Path: '', redirectTo:'/departments', pathmatch: full}
3 parameter need to provide for the redirecting route

path -> Redirect to and pathmatch
path -> any
Redirectto-> any 
PathMatch -> Prefix and full





