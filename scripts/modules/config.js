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
                controller:'homeCtrl'
           }).
            when('/aboutme',{
                templateUrl: 'wpages/aboutme.html'
                //controller: 'aboutMeCtrl'
            }).
             when('/myblog',{
                 templateUrl:'wpages/myblog.html',
                 controller:'myblogCtrl',
                 controllerAs:'blg'
             }).
              when('/portfolio',{
                  templateUrl : 'wpages/portfolio.html',
                  controller: 'porfolioCtrl'
              }).
            otherwise({
                redirectTo:'/home'
            }); 
           
                    
         }
         //contact Me Controller
        //Injecting $routerProvide into execRouter
        
         return ['$routeProvider',config];
       
});