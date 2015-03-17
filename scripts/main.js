/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 require.config({
    appDir : '',
    //baseUrl : './scripts',
    
    //Defining paths
    paths  : {
        "jquery" : "../scripts/jquery/jquery",
        "angular" : "../scripts/angular/angular",
        "angularoute" : "../scripts/angular/angular-route",
        "config"       : "../scripts/modules/config",
        "container" : "../scripts/modules/container",
        //"contactform" : "../scripts/Service/contactform",
        //the core controllers,
        //"contactCtrl" : "../scripts/controllers/contactCtrl",
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
            deps : ['angular']
        },
        "core" : {
           deps : ['angular','container','angularoute'] 
        },
        "config" : {
            deps : ['angular','angularoute']
        }
        
        /*"contactCtrl" : {
            deps : ['contactform']
        }*/
    }
     
 });
 require(["core"],function(){
    angular.bootstrap(document, ["jkula"]); 
 });