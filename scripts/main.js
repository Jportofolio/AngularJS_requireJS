/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 require.config({
   // appDir : '.',
    //baseUrl : './scripts',
    
    //Defining paths
    paths  : {
        "jquery" : "../scripts/jquery/jquery",
        "angular" : "../scripts/angular/angular", 
        "angularoute" : "../scripts/angular/angularoute",
        "angular-animate":"../scripts/angular/angular-animate.min",
        "container" : "../scripts/modules/container",
        "config"       : "../scripts/modules/config",
        "headerCtrl" : "../scripts/controllers/headerCtrl",
        "homeCtrl" : "../scripts/controllers/homeCtrl",
        "myblogCtrl": "../scripts/controllers/myblogCtrl",
        "portfolioCtrl": "../scripts/controllers/portfolioCtrl",
        "footerCtrl" : "../scripts/controllers/footerCtrl",
        "bottomCtrl": "../scripts/controllers/bottomCtrl",
        "core" : "../scripts/controllers/core"
    },
      shim    : {
   
        "core" : {
           deps : ['angular','angularoute','angular-animate.min'],
           exports: "core"
        }
    }    
     
 });
 require(['core']);
 