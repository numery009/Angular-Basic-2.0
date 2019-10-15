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

There are 3 ways to specify the selector on component

1) selector: 'app-test'   ->   <app-test></app-test>

2) selector: '.app-test'  ->   <div class="app-test"></div>

3) selector: ['app-test']  ->   # <div app-test></div> 
