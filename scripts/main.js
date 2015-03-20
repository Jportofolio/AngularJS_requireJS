/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
 require.config({
    appDir : '',
    //baseUrl : './scripts',
    
    //Defining paths
    paths  : {
        "jquery" : "../scripts/jquery/jquery",
        "angular" : "../scripts/angular/angular", 
        "angularoute" : "../scripts/angular/angular-route",
        "container" : "../scripts/modules/container",
        "config"       : "../scripts/modules/config",
       
        "headerCtrl" : "../scripts/controllers/headerCtrl",
        //controllers
        "homeCtrl" : "../scripts/controllers/homeCtrl",
        "contactCtrl" : "../scripts/controllers/contactCtrl",
        "core" : "../scripts/controllers/core"
    },
    shim    : {
        //angular dependency
        "angular" : {
            deps:  ['jquery']
        },
        //angular-route dependency
        "angularoute" : {
            deps : ['angular']
        },
        "container" : {
            deps : ['config']
        },
        "core" : {
           deps : ['angular','container','angularoute'] 
        },
        "config" : {
            deps : ['angular','angularoute']
        },
        "headerCtrl" : {
            deps : ['angular']
        },
        "contactCtrl" : {
            deps : ['angular','config','container']
        }
    }
     
 });
 
 require(["angular","core"],function(){
    angular.bootstrap(document, ['jkula']); 
 });
 
 })();