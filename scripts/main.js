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
        "bootstrap" : "../scripts/bootstrap/ui-bootstrap-tpls-0.12.1",
        "angularoute" : "../scripts/angular/angular-route",
        "container" : "../scripts/modules/container",
        "config"       : "../scripts/modules/config",
        "headerCtrl" : "../scripts/controllers/headerCtrl",
        //controllers
        "homeCtrl" : "../scripts/controllers/homeCtrl",
        "myblogCtrl": "../scripts/controllers/myblogCtrl",
        "portfolioCtrl": "../scripts/controllers/portfolioCtrl",
        "footerCtrl" : "../scripts/controllers/footerCtrl",
        "bottomCtrl": "../scripts/controllers/bottomCtrl",
        "core" : "../scripts/controllers/core"
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
 