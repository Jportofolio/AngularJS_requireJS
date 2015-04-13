/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 require.config({
    appDir : '../',
    baseUrl : 'scripts',
    
    //Defining paths
    paths  : {
        "jquery" : "jquery/jquery",
        "angular" : "angular/angular", 
        "bootstrap" : "bootstrap/ui-bootstrap-tpls-0.12.1",
        "angularoute" : "angular/angular-route",
        "container" : "modules/container",
        "config"       : "modules/config",
        "headerCtrl" : "controllers/headerCtrl",
        //controllers
        "homeCtrl" : "controllers/homeCtrl",
        "myblogCtrl": "controllers/myblogCtrl",
        "portfolioCtrl": "controllers/portfolioCtrl",
        "footerCtrl" : "controllers/footerCtrl",
        "bottomCtrl": "controllers/bottomCtrl",
        "core" : "controllers/core"
    },
    shim    : {
        //angular dependency
        "angular" : {
            deps:  ['jquery']
        },
        "bootstrap" : {
            deps : ['angular','jquery']
        },
        //angular-route dependency
        "angularoute" : {
            deps : ['angular']
        },
        "angular-animate" :{
            deps : ['angular']
        },
        "container" : {
            deps : ['config']
        }, 
        "config" : {
            deps : ['angular','angularoute']
        },
        "core" : {
           deps : ['angular','angularoute','bootstrap'] 
        },
        "headerCtrl" : {
            deps : ['angular']
        },
        "homeCtrl" : {
            deps : ['angular']
        },
        "myblogCtrl" : {
            deps: ['angular']
        },
        "portfolioCtrl" : {
            deps: ['angular']
        },
        "footerCtrl" : {
            deps: ['angular']
        },
        "bottomCtrl":{
            deps : ['angular']
        }
    }
     
 });
 
 require(["angular","core"],function(){
    angular.bootstrap(document, ['jkula']); 
 });
 