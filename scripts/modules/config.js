/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define([],
      function(){
    
         //Defining the execRouter
         function config($routeProvider){
             $routeProvider.
            when('/home',{
                templateUrl:'wpages/entree.html',
                controller:'homePageCtrl'
           }).
            when('/aboutme',{
                templateUrl: 'wpages/aboutme.html'
                //controller: 'aboutMeCtrl'
            }).
            when('/contact',{
                templateUrl: 'wpages/contact.html',
                controller:'contactCtrl',
                controllerAs: 'c'
            }).
            otherwise({
                redirectTo:'/home'
            }); 
           
                    
         }
         //contact Me Controller
        //Injecting $routerProvide into execRouter
        
         return ['$routeProvider',config];
       
});